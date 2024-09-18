import { useEffect } from "react";
import Calender from "../Components/UI/Calender";
import DisplaySection from "../Components/OfferNotes/DisplaySection";
import Button from "../Components/UI/Button";
import Card from "../Components/UI/Card";

function Rent({
	title = "Computation of Maths",
	code = "BMATH101",
	price = 50,
	preview = "./images/notes.jpg",
}) {
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
		<div className="min-h-screen mx-auto relative container p-4">
			<h2 className="text-4xl py-5 font-bold dark:text-white">
				Rent Notes
			</h2>
			<div className="flex flex-col w-full lg:flex-row justify-center items-center my-16">
				<div className="flex justify-center my-10 w-full lg:w-1/2">
					<Card className="!max-w-lg">
						<div className="text-slate-700 dark:text-slate-300 *:text-xl *:py-3">
							<p>Title: {title}</p>
							<p>Code: {code}</p>
							<p>Price per module: {price}Rs</p>
							<p>Preview:</p>
							<div className="max-w-sm mx-auto mb-2 bg-slate-300 rounded-lg p-2">
								<img
									className="rounded"
									src={preview}
									alt="Preview"
								/>
							</div>
						</div>
					</Card>
				</div>

				<div className="flex flex-col items-center w-full lg:w-1/2">
					<div>
						<p className="text-xl md:text-2xl text-slate-700 dark:text-gray-300 py-5">
							Kindly update the Date of Exam
						</p>
						<Calender />
						<Button className="my-6 !w-auto !px-10">
							Rent Notes
						</Button>
					</div>
				</div>
			</div>
			<DisplaySection data={notes} />
		</div>
	);
}

export default Rent;
