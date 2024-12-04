import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../contexts/User";
import { useNotes } from "../contexts/Notes";
import Alert from "../Components/UI/Alert";
import EditProfile from "../Components/Profile/EditProfile";
import DisplayProfile from "../Components/Profile/DisplayProfile";
import DisplaySection from "../Components/OfferNotes/DisplaySection";

function Profile() {
	const [offersMade, setOffersMade] = useState([]);
	const [rentedNotes, setRentedNotes] = useState([]);
	const [isEdit, setIsEdit] = useState(false);
	const [alerts, setAlerts] = useState([]);
	const { user, loading, updateUser, logout } = useUser();
	const { getNotesByUserId, getRentNotesByUserId } = useNotes();

	useEffect(() => {
		document.title = "Noteswap - Profile";
		
		const fetchOffersMade = async () => {
			const offers = await getNotesByUserId(user.id);
			setOffersMade(offers);
		};

		const fetchRentedNotes = async () => {
			const notes = await getRentNotesByUserId(user.id);
			setRentedNotes(notes);
		};

		fetchOffersMade();
		fetchRentedNotes();
		window.scrollTo(0, 0);
	}, [user, getNotesByUserId, getRentNotesByUserId]);

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
	if (loading) return <div>Loading</div>;
	if (!user) return <Navigate to="/auth" replace />;

	return (
		<div className="container mx-auto p-5 text-black dark:text-white">
			{isEdit ? (
				<EditProfile
					userInfo={user}
					setIsEdit={setIsEdit}
					addAlert={addAlert}
					updateUser={updateUser}
					handleLogout={logout}
				/>
			) : (
				<>
					<DisplayProfile userInfo={user} setIsEdit={setIsEdit} />
					<div className="flex flex-col gap-y-10 mt-16">
						<div className="flex flex-col gap-y-3">
							<h3 className="text-2xl font-medium">
								Offers Made:
							</h3>
							<DisplaySection data={offersMade} />
						</div>
						<div className="flex flex-col gap-y-3">
							<h3 className="text-2xl font-medium">
								Notes Rented:
							</h3>
							<DisplaySection data={rentedNotes} />
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
