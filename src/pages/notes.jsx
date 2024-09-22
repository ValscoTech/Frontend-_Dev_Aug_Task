import { useEffect, useState } from "react";
import SearchNotes from "../Components/Hero/SearchNotes";
import DisplaySection from "../Components/OfferNotes/DisplaySection";
import { useNotes } from "../contexts/Notes";
import { useUser } from "../contexts/User";

function Notes() {
	const [notes, setNotes] = useState([]);
	const { getAllNotesExceptOwner } = useNotes();
	const { user } = useUser();
	useEffect(() => {
		const fetchNotes = async () => {
			const fetchedNotes = await getAllNotesExceptOwner(user.id);
			setNotes(fetchedNotes);
		}
		fetchNotes();
		window.scrollTo(0, 0);
	}, [getAllNotesExceptOwner, user])

	return (
		<div className="container mx-auto p-5">
			<SearchNotes />
			<DisplaySection data={notes} />
		</div>
	);
}

export default Notes;
