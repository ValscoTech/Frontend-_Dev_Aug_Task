import { useEffect, useState, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import SearchNotes from "../Components/Hero/SearchNotes";
import DisplaySection from "../Components/OfferNotes/DisplaySection";
import { useNotes } from "../contexts/Notes";
import { useUser } from "../contexts/User";

function Notes() {
	const { user } = useUser();
	const { getAllNotesExceptOwner } = useNotes();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const [notes, setNotes] = useState([]);
	const [filteredNotes, setFilteredNotes] = useState([]);
	const [showNoNotesMessage, setShowNoNotesMessage] = useState(false);
	const query = searchParams.get("query") || "";
	const min = searchParams.get("min") || "";
	const max = searchParams.get("max") || "";
	const displaySectionRef = useRef(null);
	const [priceRange, setPriceRange] = useState({
		min: min || "20",
		max: max || "120",
	});

	useEffect(() => {
		document.title = "Noteswap - Search";

		const fetchNotes = async () => {
			const fetchedNotes = await getAllNotesExceptOwner(user.id);
			const updatedNotes = await fetchedNotes.map((note) => ({
				...note,
				"onClick": () => handleRentNote(note)
			}));
			setNotes(updatedNotes);
		};
		fetchNotes();
		window.scrollTo(0, 0);
	}, [setNotes, getAllNotesExceptOwner, user]);

	useEffect(() => {
		if (query || (min && max)) {
			const filtered = query
				? notes.filter(
						(note) =>
							(note.title &&
								note.title
									.toLowerCase()
									.includes(query.toLowerCase())) ||
							(note.description &&
								note.description
									.toLowerCase()
									.includes(query.toLowerCase())),
					)
				: notes.filter(
						(note) =>
							parseInt(note.price) >= parseInt(min) &&
							parseInt(note.price) <= parseInt(max),
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

		console.log("NOTES", filteredNotes)

	}, [notes, setNotes, min, max, query]);

	const handleSubmit = () => {
		if (priceRange.min < 20 || priceRange.max > 120) {
			console.log("Out of Range error");
			return;
		}
		navigate(`/notes?min=${priceRange.min}&max=${priceRange.max}`);
	};

	const handleRentNote = (note) => {
		navigate(`/rent?id=${note.id}`);
	};

	return (
		<div className="container mx-auto p-5">
			<SearchNotes
				priceRange={priceRange}
				setPriceRange={setPriceRange}
				onSubmit={handleSubmit}
			/>
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
