"use client";
import React, { useState, useEffect } from "react";
import Card from "../../../components/card/card";
import Banner from "@/components/hero_banner/banner"

interface UserProps {
	id: number,
	username: string,
	email: string
}

interface CardProps {
	postId: number,
	postNo: number,
	postTitle: string,
	postContent: string
	postAttachements: PostAttachement[]
	postAuthor?: UserProps | undefined | null,
};

interface PostAttachement {
	id: number,
	fileName: string,
	filePath: string
}

interface BoardProps {
    boardId: number,
    boardName: string,
    boardDesc: string,
    boardIcon: string | null,
    boardBanner: string | null,
    boardSubName: string,
}

export default function Sub() {
	const [cards, setCards] = useState<CardProps[]>([]);
	const [board, setBoard] = useState<BoardProps | null>(null);
	useEffect(() => {
		const fetchCards = async () => {
			try {
				// get the board name from the url
				const boardName = window.location.pathname.split('/')[2];
				console.log('Fetching cards for board:', boardName);
				let board: BoardProps;
				try {
					const lookup = await fetch(`http://localhost:8080/api/boards`);
					if (!lookup.ok) {
						throw new Error('Network response was not ok');
					}
					const boards = await lookup.json();
					board = boards.find((board: { boardSubName: string }) => board.boardSubName === boardName);
					setBoard(board);
					if (!board) {
						throw new Error('Board not found in the list');
					}
				} catch (error) {
					console.error('Error fetching boards:', error);	
					return;
				}
				const response = await fetch('http://localhost:8080/api/posts?boards=' + board.boardId);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setCards(data);
			} catch (error) {
				console.error('Error fetching cards:', error);
			}
		}
		fetchCards();
	}, []);
  return (
		
		<>
			<Banner name={board?.boardName}
					description={board?.boardDesc}
					icon=""
					banner=""/>
			
			<div className="post-container" style={{
				paddingTop: '10rem'
			}}>
				<hr/>
			{(cards.length !== 0) ? cards.map((card, index) => (
				<Card 
					key={index}
					title={card.postTitle}
					content={card.postContent}
					author={card.postAuthor ? card.postAuthor.username : "Anonymous"}
					id={card.postId.toString()}
					image={card.postAttachements}
					post_number={card.postNo}
				/>
			)) : (<p style={{
				textAlign: 'center',
				fontSize: '1.5rem',
				fontWeight: 'bold',
				color: 'gray'}}>
				No posts available in this sub. Please check back later.
			</p>)}
			</div> 
		</>
	);
}
