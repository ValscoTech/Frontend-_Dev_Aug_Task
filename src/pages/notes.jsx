import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import SearchNotes from "../Components/Hero/SearchNotes";
import DisplaySection from "../Components/OfferNotes/DisplaySection";
import { useNotes } from "../contexts/Notes";
import { useUser } from "../contexts/User";

function Notes() {
	const [notes, setNotes] = useState([]);
	const [filteredNotes, setFilteredNotes] = useState([]);
	const [showNoNotesMessage, setShowNoNotesMessage] = useState(false);
	const { getAllNotesExceptOwner } = useNotes();
	const { user } = useUser();
	const [searchParams] = useSearchParams();
	const query = searchParams.get("query") || "";
	const displaySectionRef = useRef(null);

	useEffect(() => {
		document.title = "Noteswap - Search";

		const fetchNotes = async () => {
			const fetchedNotes = await getAllNotesExceptOwner(user.id);
			setNotes(fetchedNotes);
		};
		fetchNotes();
		window.scrollTo(0, 0);
	}, [getAllNotesExceptOwner, user]);

	useEffect(() => {
		if (query) {
			const filtered = notes.filter(
				(note) =>
					(note.title &&
						note.title
							.toLowerCase()
							.includes(query.toLowerCase())) ||
					(note.description &&
						note.description
							.toLowerCase()
							.includes(query.toLowerCase())),
			);
			setFilteredNotes(filtered);

			if (filtered.length === 0) {
				setShowNoNotesMessage(true);
			} else {
				setShowNoNotesMessage(false);
			}
			if (displaySectionRef.current) {
				displaySectionRef.current.scrollIntoView({
					behavior: "smooth",
				});
			}
		} else {
			setFilteredNotes(notes);
			setShowNoNotesMessage(false);
		}
	}, [notes, query]);

	return (
		<div className="container mx-auto p-5">
			<SearchNotes />
			{showNoNotesMessage && (
				<p className="text-red-500 text-center text-2xl flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-7 w-7 inline-flex mr-2"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
							clipRule="evenodd"
						/>
					</svg>
					No notes found for the search query.
				</p>
			)}
			<div ref={displaySectionRef}>
				<DisplaySection data={filteredNotes} />
			</div>
		</div>
	);
}

export default Notes;
