import Card from "../../components/card/card";
import Banner from "@/components/hero_banner/banner"

interface CardProps {
    title: string
    content: string,
    id: string,
    image: string
	post_number: number
};

const cardExamples: CardProps[] = [
	{
		title: "Ass",
		content: "something",
		image: "",
		id: "1",
		post_number: 0
	},
	{
		title: "Booty",
		content: "lmfaooooooooooooooooooooooooooooooooooo",
		image: "",
		id: "2",
		post_number: 1
	},
	{
		title: "Heelellfak;jsfajklfkbagoehefo",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero animi ipsa error accusantium natus in velit magni, incidunt maxime quae eaque tempora sunt necessitatibus, quasi mollitia vitae consectetur recusandae officiis!",
		image: "",
		id: "3",
		post_number: 2
	}
];

export default function Sub() {
  return (
		<>
			<Banner/>
			<div className="post-container" style={{
				paddingTop: '10rem'
			}}>
			{cardExamples.map((card, index) => (
				<Card 
					key={index}
					title={card.title}
					content={card.content}
					id={card.id}
					image={card.image}
					post_number={card.post_number}
				/>
			))}
			</div> 
		</>
	);
}
