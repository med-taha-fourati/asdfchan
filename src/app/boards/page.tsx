"use client";
import React, { useState, useEffect } from 'react';
import Board from '@/components/board_card/board';
// import '@/components/board_card/board.css';

interface BoardProps {
    boardId: number,
    boardName: string,
    boardDesc: string,
    boardIcon: string | null,
    boardBanner: string | null,
    boardSubName: string,
}

// const exampleBoardList: BoardProps[] = [
    

// ]

const Boards = () => {
    const [boards, setBoards] = useState<BoardProps[]>([]);
    useEffect(() => {
        const fetchBoards = async () => {
            try {
                // get the current name
                const response = await fetch(`http://localhost:8080/api/boards`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBoards(data);
            } catch (error) {
                console.error('Error fetching boards:', error);
            }
        };
        fetchBoards();
    }, []);

    return (
        <>
            <div className="welcome">
				<div className="container justify-content-center align-items-center text-white pt-5" style={{
                    textAlign: 'center'
				}}>
					<div className="container-title">
						<h1 
                        style={{
                            fontSize: '4rem'
                        }}>Boards</h1>
					</div>
					<div className="container-text">
						<p>Explore the different boards to chat in</p>
					</div>
				</div>
                
                <div className='container'>
                <div className='mt-5 row row-cols-1 row-cols-md-3 g-4'>
                    {boards.map((board, index) => (
				        <Board
				        	key={index}
				        	link={board.boardSubName}
                            description={board.boardDesc}
				        />
			        ))}
                </div>
                </div>
			</div>
        </>
    );
}

export default Boards;