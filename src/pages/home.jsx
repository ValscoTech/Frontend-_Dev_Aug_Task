import Hero from "../Components/Hero/Hero";
import AppPromotion from "../Components/Hero/AppPromotion";
import DisplaySection from "../Components/OfferNotes/DisplaySection";
import SearchNotes from "../Components/Hero/SearchNotes";
import { useEffect } from "react";

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const notes = [
		{
			title: "Computation of Mathematics",
			coursename: "Mathematics",
			code: "CSE 2005",
			module: 8,
			school: "SCOPE",
			price: 100,
			preview: "./images/notes.jpg",
		},
		{
			title: "Computation of Mathematics",
			coursename: "Mathematics",
			code: "CSE 2005",
			module: 8,
			school: "SCOPE",
			price: 120,
			preview: "./images/notes.jpg",
		},
		{
			title: "Computation of Mathematics",
			coursename: "Mathematics",
			code: "CSE 2005",
			module: 8,
			school: "SCOPE",
			price: 50,
			preview: "./images/notes.jpg",
		},
	];

	return (
		<div className="container mx-auto font-sans px-10">
			<Hero />
			<AppPromotion />
			<DisplaySection data={notes} />
			<SearchNotes />
		</div>
	);
};

export default Home;
