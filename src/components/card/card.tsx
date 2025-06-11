import './card.css';
import React from 'react';
import Image from 'next/image'

interface PostAttachement {
	id: number,
	fileName: string,
	filePath: string
}

interface CardProps {
    title: string
    content: string,
    id: string,
    post_number: number
    image: PostAttachement[],
    author?: string
};

const Card: React.FC<CardProps> = ({ title, content, id, image, post_number, author })  => {
    const regexDoubleArrow = />>(\d+)/g;
    const regexSingleArrow = />/g;
    //const regexTripleArrow = />>>(\d+)/g;
    
    return (
        <>
            <section id={post_number.toString()}>
            <div className="container text-white mb-3" id={id}>
                <div className="card" style={{
                    borderRadius: '15px',
                    backgroundColor: '#333333',
                    color: '#ffffff',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                }}>
                    <div className="card-body">
                        <h5 className="card-title"><span style={{
                            color: '#a9e5fc'
                        }}>{author}</span> posted</h5>
                        <p className="card-text">Id: {id} | No. : {post_number}</p>

                        <hr />
                        <h2 className='card-title'>{title}</h2>
                        <p className="card-text">
                            {regexDoubleArrow.test(content) ? (
                                (<><a href={`#${content.match(regexDoubleArrow)?.[0]?.slice(2)}`} style={{
                                    color: '#f00'
                                }}>{">>"+content.match(regexDoubleArrow)?.[0]?.slice(2)}</a><span>{content.slice(3)}</span></>)
                                
                            ) : regexSingleArrow.test(content) ? (
                                (<><p style={{
                                    color: '#0f0'
                                }}>{content}</p></>)
                            ) : <p>{content}</p>}</p>
                        
                        {(image.length <= 0) ? (<i>No attachments</i>) : (
                            image instanceof Array ? (
                                image.map((attachment: PostAttachement, index: number) => (
                                    <Image key={index} className="card-img-top" src={attachment.filePath} alt={attachment.fileName} width={50} height={50}/>
                                ))
                            ) : "Could'nt load image"
                        )}
                    </div>
                </div>
            </div>
            </section>
        </>
    );
}

export default Card;