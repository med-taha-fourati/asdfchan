import React from 'react';
import Board from '@/components/board_card/board';
// import '@/components/board_card/board.css';

interface BoardProps {
    link: string,
    description: string
}

const exampleBoardList: BoardProps[] = [
    {
        link: "/bruh",
        description: "Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons yet understood decisively boy law she. Answer him easily are its barton little. Oh no though mother be things simple itself. Dashwood horrible he strictly on as. Home fine in so am good body this hope."
    },

    {
        link: "/example_sub",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, rem accusantium tempora beatae dicta numquam. Ad, illo itaque nihil veniam sequi, magni perferendis ea dolore hic nam recusandae eos accusantium."
    },

    {
        link: "/b",
        description: "l"
    },

    {
        link: "/r9k",
        description: "foni_sub"
    },

    {
        link: "/pinata",
        description: "el pinata"
    },

]

const Boards = () => {
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
                    {exampleBoardList.map((board, index) => (
				        <Board
				        	key={index}
				        	link={board.link}
                            description={board.description}
				        />
			        ))}
                </div>
                </div>
			</div>
        </>
    );
}

export default Boards;