import { useEffect, useState } from "react";
import DetailsSection from "../Components/OfferNotes/DetailsSection";
import UploadSection from "../Components/OfferNotes/UploadSection";
import DisplaySection from "../Components/OfferNotes/DisplaySection";
import Alert from "../Components/UI/Alert";
import { useNotes } from "../contexts/Notes";
import { useUser } from "../contexts/User";

function Offer() {
	const [alerts, setAlerts] = useState([]);
	const [offers, setOffers] = useState([]);
	const { getNotesByUserId } = useNotes();
	const { user } = useUser();

	useEffect(() => {
		document.title = "Noteswap - Offer";
		const fetchNotes = async () => {
			const fetchedNotes = await getNotesByUserId(user.id);
			setOffers(fetchedNotes);
		};

		fetchNotes();
		window.scrollTo(0, 0);
	}, [user, getNotesByUserId]);

	const [formData, setFormData] = useState({
		title: "",
		coursename: "",
		code: "",
		module: "",
		school: "",
		price: "",
		previews: [],
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		// check if offer already exists
		if (
			offers.some(
				(offer) =>
					offer.title.toLowerCase() ===
					formData.title.toLowerCase().trim(),
			)
		) {
			addAlert("Offer already exists", "warning");
			return;
		}
		if (Object.values(formData).some((value) => value.trim() === "")) {
			//check if all fields are filled
			addAlert("Please fill all fields", "warning");
			return;
		}
		if (formData.previews.length < 2) {
			addAlert("Please upload at least 2 files", "warning");
			return;
		}

		setFormData({
			...formData,
			id: toString(offers.length + 1),
			ownerId: user.id,
			title: formData.title.trim(),
			coursename: formData.coursename.trim(),
			code: formData.code.trim(),
			module: formData.module.trim(),
			school: formData.school.trim(),
			price: formData.price.trim(),
			consumersId: [],
			createdAt: new Date().toISOString(),
		});

		setOffers([formData, ...offers]);
		addAlert("Offer submitted successfully", "success");
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
			<div className="min-h-screen mx-auto relative container p-5">
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
