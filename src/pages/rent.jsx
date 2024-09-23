import { useEffect, useState } from "react";
import { useNotes } from "../contexts/Notes";
import { useUser } from "../contexts/User";
import { LuXCircle } from "react-icons/lu";
import Calender from "../Components/UI/Calender";
import DisplaySection from "../Components/OfferNotes/DisplaySection";
import Button from "../Components/UI/Button";

function Rent({
	title = "Computation of Maths",
	code = "BMATH101",
	price = 50,
	preview = "./images/notes.jpg",
}) {
	const { user } = useUser();
	const { getRentNotesByUserId } = useNotes();
	const [notes, setNotes] = useState([]);
	const [zoomedImage, setZoomedImage] = useState(null);

	useEffect(() => {
		document.title = "Noteswap - Rent";
		
		const fetchNotes = async () => {
			const fetchedNotes = await getRentNotesByUserId(user.id);
			setNotes(fetchedNotes);
		};

		fetchNotes();
		window.scrollTo(0, 0);
	}, [user, getRentNotesByUserId]);

	const handleImageClick = (image) => {
		setZoomedImage(image);
	};

	const closeZoomedImage = () => {
		setZoomedImage(null);
	};

	return (
		<div className="mx-auto container p-5">
			<h2 className="text-4xl py-5 font-bold dark:text-white">
				Rent Notes
			</h2>
			<div className="flex flex-col w-full xl:flex-row justify-center items-center my-16">
				<div className="flex justify-center my-10 w-full xl:w-1/2">
					<div className="text-slate-700 dark:text-slate-300 *:text-xl *:py-3">
						<p>Title: {title}</p>
						<p>Code: {code}</p>
						<p>Price per module: {price}Rs</p>
						<p>Preview:</p>
						<div className="flex -space-x-28 sm:-space-x-36 md:-space-x-56 p-3 bg-slate-400 rounded-xl *:border *:border-slate-700 *:rounded-lg *:z-10 duration-300 *:transition-all *:cursor-pointer *:active:scale-100">
							{[1, 2, 3, 4, 5].map((index) => (
								<img
									key={index}
									className="rounded h-48 sm:h-64 md:h-96 inline-block hover:-translate-y-2"
									src={preview}
									alt={`Preview ${index}`}
									onClick={() => handleImageClick(preview)}
								/>
							))}
						</div>
					</div>
				</div>

				<div className="flex flex-col items-center w-full xl:w-1/2">
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
			{zoomedImage && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 px-5">
					<img
						src={zoomedImage}
						alt="Zoomed Preview"
						className="relative max-w-full max-h-full rounded"
						onClick={closeZoomedImage}
					/>
				</div>
			)}
		</div>
	);
}

export default Rent;
