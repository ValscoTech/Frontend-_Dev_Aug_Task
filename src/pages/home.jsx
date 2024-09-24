import Hero from "../Components/Hero/Hero";
import AppPromotion from "../Components/Hero/AppPromotion";
import DisplaySection from "../Components/OfferNotes/DisplaySection";
import SearchNotes from "../Components/Hero/SearchNotes";
import { useEffect, useState } from "react";
import { useNotes } from "../contexts/Notes";
import { useUser } from "../contexts/User";

const Home = () => {
	const [notes, setNotes] = useState([]);
	const { user } = useUser();
	const { getNotesByUserId } = useNotes();

	useEffect(() => {
		document.title = "Noteswap";
		const fetchNotes = async () => {
			if (user && user.id) {
				try {
					const fetchedNotes = await getNotesByUserId(user.id);
					setNotes(fetchedNotes);
				} catch (error) {
					console.error("Error fetching notes:", error);
				}
			}
		};
		fetchNotes();
		window.scrollTo(0, 0);
	}, [user, getNotesByUserId]);

	return (
		<div className="container mx-auto p-5">
			<Hero />
			<AppPromotion />
			<DisplaySection data={notes} />
			<SearchNotes />
		</div>
	);
};

export default Home;
