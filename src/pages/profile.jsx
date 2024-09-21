import { useState, useEffect } from "react";
import Alert from "../Components/UI/Alert";
import EditProfile from "../Components/Profile/EditProfile";
import DisplayProfile from "../Components/Profile/DisplayProfile";
import DisplaySection from "../Components/OfferNotes/DisplaySection";

function Profile() {
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

	const [isEdit, setIsEdit] = useState(false);
	const [alerts, setAlerts] = useState([]);

	const [userInfo, setUserInfo] = useState({
		name: "Adam Doe",
		avatar: "",
		roonno: "123",
		department: "IT",
		specialization: "",
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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
		<div className="container mx-auto p-5 text-black dark:text-white">
			{isEdit ? (
				<EditProfile
					userInfo={userInfo}
					setIsEdit={setIsEdit}
					setUserInfo={setUserInfo}
					addAlert={addAlert}
				/>
			) : (
				<>
					<DisplayProfile userInfo={userInfo} setIsEdit={setIsEdit} />
					<div className="flex flex-col gap-y-10 mt-16">
						<div className="flex flex-col gap-y-3">
							<h3 className="text-2xl font-medium">
								Offers Made:
							</h3>
							<DisplaySection data={notes} />
						</div>
						<div className="flex flex-col gap-y-3">
							<h3 className="text-2xl font-medium">
								Notes Rented:
							</h3>
							<DisplaySection data={notes} />
						</div>
					</div>
				</>
			)}

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
		</div>
	);
}

export default Profile;
