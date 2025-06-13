import React, { useState } from 'react';
import Image from 'next/image';

interface CarouselProps {
    images: string[];
    index: number
    closeBtn: boolean
    handleClose: () => void;
}

//FIXME - This component is not responsive, it needs to be fixed
// Component does not get anchored to the full height and width of the screen, it is not responsive
//FIXME - The images are not centered, they are not responsive, they are not anchored to the full height and width of the screen
const Carousel: React.FC<CarouselProps> = ({images, index, closeBtn, handleClose}) => {
    const [currentIndex, setCurrentIndex] = useState(index || 0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
        {closeBtn ? "" : (<>
        {images.length !== 0 ? (
        <div style={{ 
            overflow: 'hidden', 
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 1000,}}>
            <button
                onClick={handleClose}
                style={{
                    position: 'absolute',
                    top: '90px',
                    right: '10px',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    border: 'none',
                    padding: '10px',
                    cursor: 'pointer',
                    zIndex: 1001,
                }}
            >
                Close
            </button>
            <div
                style={{
                    display: 'flex',
                    transform: `translateX(-${currentIndex * 50}%)`,
                    transition: 'transform 0.5s ease-in-out',
                    height: '100%',
                    width: `${images.length * 100}%`,
                }}
            >
                {images.map((src, index) => (
                    <div key={index} style={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        position: 'relative', 
                        width: '100%',
                        height: '100%',

                        }}>
                    <Image
                        key={index}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        width={400}
                        height={400}
                        style={{ 
                            marginTop: '50vh',
                            marginLeft: '50vw',
                            transform: 'translate(-50%, -50%)',
                            objectFit: 'cover' 

                        }}
                    />
                    </div>
                ))}
            </div>
            <button
                onClick={handlePrev}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '10px',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    border: 'none',
                    padding: '10px',
                    cursor: 'pointer',
                }}
            >
                Prev
            </button>
            <button
                onClick={handleNext}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    border: 'none',
                    padding: '10px',
                    cursor: 'pointer',
                }}
            >
                Next
            </button>
        </div>
        ) : ""}</>)}</>
    );
};

export default Carousel;