import React from "react";
import NotesCard from "../UI/NotesCard";

function DisplaySection({ data }) {
	return (
		<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-20 mb-16">
			{data.map((note, idx) => (
				<NotesCard key={idx} note={note} />
			))}
		</div>
	);
}

export default DisplaySection;
