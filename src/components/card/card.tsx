import './card.css';
import React from 'react';
import Image from 'next/image'

interface CardProps {
    title: string
    content: string,
    id: string,
    post_number: number
    image: string
};

const Card: React.FC<CardProps> = ({ title, content, id, image, post_number })  => {
    return (
        <>
            <div className="container text-white mb-3">
                <div className="card" style={{
                    borderRadius: '15px',
                    backgroundColor: '#333333',
                    color: '#ffffff',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                }}>
                    <div className="card-body">
                        <h5 className="card-title"><span style={{
                            color: '#a9e5fc'
                        }}>Anonymous</span> posted</h5>
                        <p className="card-text">Id: {id} | No. : {post_number}</p>

                        <hr />
                        <h2 className='card-title'>{title}</h2>
                        <p className="card-text">{content}</p>
                        
                        {(image === "") ? (<i>No attachments</i>) : (
                            <Image className="card-img-top" src={image} alt="image" />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;