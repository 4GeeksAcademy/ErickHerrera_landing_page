import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const cards = [
	{
		image: "https://picsum.photos/200/300",
		title: "Parque",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elit erat, imperdiet sit amet ante ac, gravida semper lectus. Cras faucibus nulla at molestie rhoncus",
	},
	{
		image: "https://picsum.photos/200/300",
		title: "image",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elit erat, imperdiet sit amet ante ac, gravida semper lectus. Cras faucibus nulla at molestie rhoncus",
	},
	{
		image: "https://picsum.photos/200/300",
		title: "image",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elit erat, imperdiet sit amet ante ac, gravida semper lectus. Cras faucibus nulla at molestie rhoncus",
	},
	{
		image: "https://picsum.photos/200/300",
		title: "image",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elit erat, imperdiet sit amet ante ac, gravida semper lectus. Cras faucibus nulla at molestie rhoncus",
	}
];

const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;