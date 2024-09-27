import React from "react";
import NotesCard from "../UI/NotesCard";

function DisplaySection({ data }) {
	return (
		<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-14 mb-16">
			{data.map((note, idx) => (
				<NotesCard key={idx} note={note} onClick={note.onClick ? note.onClick : null}/>
			))}
		</div>
	);
}

export default DisplaySection;
