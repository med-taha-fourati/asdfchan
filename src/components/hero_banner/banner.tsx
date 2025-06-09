import Image from "next/image";
import the_img from "../../../public/images/main.jpg";
import './banner.css';

interface BannerProps {
    name: string | undefined,
    description: string | undefined,
    icon: string | null,
    banner: string | null,
}

const Banner: React.FC<BannerProps> = ({name, description, icon, banner}) => {
    return (
        <>
            <div className="banner">
                <div className="board-details">
                    <div className="board-img-container">
                        <Image src={the_img} alt="board_img" className="icon-img" />
                    </div>
                    <div className="board-text" style={{
                        color: "white",
                    }}>
                        <div className="board-name">
                            <h1>{name}</h1>
                        </div>
                        <div className="board-description">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;