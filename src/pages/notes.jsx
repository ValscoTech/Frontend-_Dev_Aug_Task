import { useEffect } from "react";
import SearchNotes from "../Components/Hero/SearchNotes";
import DisplaySection from "../Components/OfferNotes/DisplaySection";

function Notes() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const notes = [
		{
			code: "CSE2010",
			title: "Data Structures",
			coursename: "Computer Science: Python",
			module: 5,
			school: "SCOPE",
			price: "80",
			preview: "./images/notes.jpg",
		},
		{
			code: "CSE2011",
			title: "Algorithms",
			coursename: "Computer Science: Python",
			module: 8,
			school: "SENSE",
			price: "100",
			preview: "./images/notes.jpg",
		},
		{
			code: "CSE2012",
			title: "Database Management",
			coursename: "Computer Science: Python",
			module: 9,
			school: "SCORE",
			price: "90",
			preview: "./images/notes.jpg",
		},
		{
			code: "CSE2013",
			title: "Machine Learning",
			coursename: "Computer Science: Python",
			module: 10,
			school: "SCOPE",
			price: "120",
			preview: "./images/notes.jpg",
		},
		{
			code: "CSE2014",
			title: "Web Development",
			coursename: "Computer Science: Python",
			module: 4,
			school: "SENSE",
			price: "75",
			preview: "./images/notes.jpg",
		},
		{
			code: "CSE2015",
			title: "Operating Systems",
			coursename: "Computer Science: Python",
			module: 11,
			school: "SCORE",
			price: "110",
			preview: "./images/notes.jpg",
		},
		{
			code: "CSE2016",
			title: "Computer Networks",
			coursename: "Computer Science: Python",
			module: 3,
			school: "SCOPE",
			price: "65",
			preview: "./images/notes.jpg",
		},
		{
			code: "CSE2017",
			title: "Software Engineering",
			coursename: "Computer Science: Python",
			module: 12,
			school: "SENSE",
			price: "85",
			preview: "./images/notes.jpg",
		},
		{
			code: "CSE2018",
			title: "Cybersecurity Fundamentals",
			coursename: "Computer Science: Python",
			module: 2,
			school: "SCORE",
			price: "95",
			preview: "./images/notes.jpg",
		},
		{
			code: "CSE2019",
			title: "Artificial Intelligence",
			coursename: "Computer Science: Python",
			module: 1,
			school: "SCOPE",
			price: "100",
			preview: "./images/notes.jpg",
		},
	];

	return (
		<div className="container mx-auto p-5">
			<SearchNotes />
			<DisplaySection data={notes} />
		</div>
	);
}

export default Notes;
