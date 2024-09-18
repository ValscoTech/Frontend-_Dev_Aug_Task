import { useState } from "react";
import DetailsSection from "../Components/OfferNotes/DetailsSection";
import UploadSection from "../Components/OfferNotes/UploadSection";
import DisplaySection from "../Components/OfferNotes/DisplaySection";
import Alert from "../Components/UI/Alert";

function Offer() {
	const [offers, setOffers] = useState([
		{
			code: "CSE2005",
			title: "Computation Of Maths",
			coursename: "Computer Science: Python",
			module: 12,
			school: "SCOPE",
			price: "100",
			preview: "./images/notes.png",
		},
		{
			code: "CSE2002",
			title: "Computation Of Maths",
			coursename: "Computer Science: Python",
			module: 7,
			school: "SENSE",
			price: "100",
			preview: "./images/notes.png",
		},
		{
			code: "CSE2009",
			title: "Qualitative Analysis",
			coursename: "Computer Science: Python",
			module: 6,
			school: "SCORE",
			price: "100",
			preview: "./images/notes.png",
		},
	]);
	const [formData, setFormData] = useState({
		code: "",
		title: "",
		coursename: "",
		module: "",
		school: "",
		price: "",
		preview: "./images/notes.png",
	});

	const [alerts, setAlerts] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		// check if offer already exists
		if (
			offers.some(
				(offer) =>
					offer.title.toLowerCase() === formData.title.toLowerCase(),
			)
		) {
			addAlert("Offer already exists", "warning");
			return;
		}
		if (Object.values(formData).some((value) => value === "")) {
			//check if all fields are filled
			addAlert("Please fill all fields", "warning");
			return;
		}

		setOffers([formData, ...offers]);
	};

	const addAlert = (message, variant) => {
		const id = new Date().getTime();
		const newAlert = { id, message, variant, show: true };

		setAlerts((prevAlerts) => {
			const updatedAlerts = [...prevAlerts, newAlert];
			if (updatedAlerts.length > 3) {
				updatedAlerts.shift(); // Remove the oldest alert
			}
			return updatedAlerts;
		});

		// Set a timeout to hide the alert after 3 seconds
		setTimeout(() => {
			setAlerts((prevAlerts) =>
				prevAlerts.map((alert) =>
					alert.id === id ? { ...alert, show: false } : alert,
				),
			);
		}, 3000);
	};

	const handleAlertClose = (id) => {
		setAlerts((prevAlerts) =>
			prevAlerts.map((alert) =>
				alert.id === id ? { ...alert, show: false } : alert,
			),
		);
	};

	return (
		<>
			<div className="min-h-screen mx-auto relative container p-4">
				<h2 className="text-4xl py-5 font-bold dark:text-white">
					Offer Notes
				</h2>
				<form
					onSubmit={handleSubmit}
					className="container mx-auto flex flex-col lg:flex-row gap-16 mb-36"
				>
					<DetailsSection setFormData={setFormData} />
					<UploadSection
						formData={formData}
						setFormData={setFormData}
						addAlert={addAlert}
					/>
				</form>
				<DisplaySection data={offers} />
			</div>

			<div className="fixed top-16 right-4 w-96 sm:w-7/12 lg:w-5/12 grid grid-cols-1 gap-4">
				{alerts
					.slice()
					.reverse()
					.map((alert, index) => (
						<Alert
							key={alert.id}
							id={index}
							message={alert.message}
							variant={alert.variant}
							show={alert.show}
							onClose={() => handleAlertClose(alert.id)}
						/>
					))}
			</div>
		</>
	);
}

export default Offer;
