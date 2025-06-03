import Image from "next/image";
import the_img from "../../../public/images/main.jpg";
import './banner.css';

const Banner = () => {
    return (
        <>
            <div className="banner">
                <div className="board-details">
                    <div className="board-img-container">
                        <Image src={the_img} alt="board_img" className="icon-img" />
                    </div>
                    <div className="board-text" style={{
                        color: "white"
                    }}>
                        <div className="board-name">
                            <h1>Example Sub</h1>
                        </div>
                        <div className="board-description">
                            <p>Example sub description</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;