import React from "react";
import NotesCard from "../UI/NotesCard";

const data = [
	{
		courseCode: "CSE2005",
		courseName: "Computation Of Maths",
		modulesCovered: 12,
		schoolName: "SCOPE",
		previewImage: "./images/notes.png",
	},
	{
		courseCode: "CSE2002",
		courseName: "Computation Of Maths",
		modulesCovered: 7,
		schoolName: "SENSE",
		previewImage: "./images/notes.png",
	},
	{
		courseCode: "CSE2009",
		courseName: "Qualitative Analysis",
		modulesCovered: 6,
		schoolName: "SCORE",
		previewImage: "./images/notes.png",
	},
	{
		courseCode: "CSE2079",
		courseName: "Computation Of Physics",
		modulesCovered: 9,
		schoolName: "SCOPE",
		previewImage: "./images/notes.png",
	},
	{
		courseCode: "CSE2005",
		courseName: "Computation Of Chemistry",
		modulesCovered: 8,
		schoolName: "SENSE",
		previewImage: "./images/notes.png",
	},
	{
		courseCode: "CSE2005",
		courseName: "Computation Of Biology",
		modulesCovered: 5,
		schoolName: "SCORE",
		previewImage: "./images/notes.png",
	},
	{
		courseCode: "CSE2005",
		courseName: "Computation Of Maths",
		modulesCovered: 8,
		schoolName: "SCOPE",
		previewImage: "./images/notes.png",
	},
	{
		courseCode: "CSE2005",
		courseName: "Computation Of Maths",
		modulesCovered: 10,
		schoolName: "SENSE",
		previewImage: "./images/notes.png",
	},
	{
		courseCode: "CSE2005",
		courseName: "Computation Of Maths",
		modulesCovered: 6,
		schoolName: "SCOPE",
		previewImage: "./images/notes.png",
	},
];

function DisplaySection() {
	return (
		<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-20 gap-y-36">
			{data.map((note, idx) => (
				<NotesCard key={idx} note={note} />
			))}
		</div>
	);
}

export default DisplaySection;
