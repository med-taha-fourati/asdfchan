import React from 'react';
import Link from 'next/link';

interface BoardProps {
    link: string
    description: string
};

const Board: React.FC<BoardProps> = ({ link, description })  => {
    return (
        <>
            <div className="text-white mb-3 col h-100">
                <div className="card" style={{
                    borderRadius: '15px',
                    backgroundColor: '#333333',
                    color: '#ffffff',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                }}>
                    <div className="card-body">
                        <h5 className='card-title'>
                            <Link href={link}>{"/"+link+"/"}</Link>
                        </h5>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Board;