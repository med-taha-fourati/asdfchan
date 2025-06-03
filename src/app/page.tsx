import Image from 'next/image';
import mainImg from '../../public/images/main.jpg';

export default function Home() {
	return (
		<>
			<div className="welcome">
				<div className="container d-flex flex-column justify-content-center align-items-center text-white" style={{
					height: '100vh',
					textAlign: 'center'
				}}>
					<div className="container-image mb-5">
						<Image src={mainImg} alt="image" style={{
							borderRadius: '1rem',
							height: '15rem',
							width: '15rem'
						}}/>
					</div>
					<div className="container-title">
						<h1>Welcome to the asdfchan website</h1>
					</div>
					<div className="container-text">
						<p>Here you can find many cute and funny pictures and threads to talk about in</p>
					</div>
				</div>
			</div>
		</>
	)
}