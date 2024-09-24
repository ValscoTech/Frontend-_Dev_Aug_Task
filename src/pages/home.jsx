import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Hero from "../Components/Hero/Hero";
import AppPromotion from "../Components/Hero/AppPromotion";
import DisplaySection from "../Components/OfferNotes/DisplaySection";
import SearchNotes from "../Components/Hero/SearchNotes";
import { useNotes } from "../contexts/Notes";
import { useUser } from "../contexts/User";

const Home = () => {
	const { user } = useUser();
	const { getNotesByUserId } = useNotes();
	const navigate = useNavigate();
	const [notes, setNotes] = useState([]);
	const [priceRange, setPriceRange] = useState({
		min: "20",
		max: "120",
	});

	useEffect(() => {
		document.title = "Noteswap";
		const fetchNotes = async () => {
			if (user && user.id) {
				try {
					const fetchedNotes = await getNotesByUserId(user.id);
					setNotes(fetchedNotes.slice(0, 8));
				} catch (error) {
					console.error("Error fetching notes:", error);
				}
			}
		};
		fetchNotes();
		window.scrollTo(0, 0);
	}, [user, getNotesByUserId]);


	const handleSubmit = () => {
		if (priceRange.min < 20 || priceRange.max > 120) {
			console.log("Out of Range error");
			return;
		}
		navigate(`/notes?min=${priceRange.min}&max=${priceRange.max}`);
 	};

	return (
		<div className="container mx-auto p-5">
			<Hero />
			<AppPromotion />
			<DisplaySection data={notes} />
			<SearchNotes priceRange={priceRange} setPriceRange={setPriceRange} onSubmit={handleSubmit} />
		</div>
	);
};

export default Home;
