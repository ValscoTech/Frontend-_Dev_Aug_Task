import { useEffect, useState } from "react";
import RegisterForm from "../Components/Auth/RegisterForm";
import LoginForm from "../Components/Auth/LoginForm";
import Alert from "../Components/UI/Alert";
import { GoogleOAuthProvider } from "@react-oauth/google";
import useFacebook from "../contexts/Facebook";

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function Auth() {
	document.title = "Noteswap - Auth";
	const [alerts, setAlerts] = useState([]);
	const [state, setState] = useState("login");
	const [facebook, isFacebookReady] = useFacebook();

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

	const handleFBAuth = async () => {
		if (!isFacebookReady) {
			addAlert("Facebook SDK is not ready yet", "error");
			return; // Exit if Facebook is not ready
		}
		const response = await facebook.login();
		if (response.status === "unknown") {
			addAlert("Failed to authorize user", "error");
		} else {
			addAlert(
				"Authorization through Facebook was successful",
				"success",
			);
		}
		console.log(response);
	};

	return (
		<div
			className={`container transition-all duration-300 mx-auto flex flex-col lg:flex-row text-black dark:text-white py-20 px-5 gap-20 ${state === "login" ? "lg:flex-row-reverse" : ""}`}
		>
			<GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
				<div className="flex flex-col items-center justify-center w-full lg:w-1/2">
					{state === "login" ? (
						<LoginForm
							setState={setState}
							addAlert={addAlert}
							isFacebookReady={isFacebookReady}
							handleFBAuth={handleFBAuth}
						/>
					) : (
						<RegisterForm
							setState={setState}
							addAlert={addAlert}
							isFacebookReady={isFacebookReady}
							handleFBAuth={handleFBAuth}
						/>
					)}
				</div>
			</GoogleOAuthProvider>
			<div className="flex flex-col items-center justify-center w-full lg:w-1/2">
				<p className="text-2xl font-medium">
					RENT NOTES - OFFER NOTES - MAKE A PROFILE AND DO MORE WITH
					NOTESWAP
				</p>
				<img
					src="./images/vector.svg"
					className="max-w-sm"
					alt="vector"
				/>
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
		</div>
	);
}

export default Auth;
