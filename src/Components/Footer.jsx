import React, { useState } from "react";
import { FaTwitter, FaInstagram, FaFacebook, FaArrowUp } from "react-icons/fa";
import { LuMoveDownRight } from "react-icons/lu";
import Button from "./UI/Button";
import { NavLink } from "react-router-dom";
import Alert from "./UI/Alert";

const Footer = ({ smoothScroll }) => {
	const [alerts, setAlerts] = useState([]);

	const handleCopy = (id) => {
		let elem = document.getElementById(id).textContent;
		try {
			navigator.clipboard.writeText(elem);
			addAlert("Copied to clipboard", "success");
		} catch (error) {
			addAlert("Failed to copy", "error");
		}
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
		<footer
			id="footer"
			className="font-poppins bg-stone-100 dark:bg-black text-black dark:text-white"
		>
			<div className="container mx-auto flex flex-col py-10 px-4">
				<div className="h-1 rounded-full bg-stone-600 dark:bg-white"></div>

				<div className="flex justify-between py-10">
					<h2 className="text-4xl font-medium font-sans">Noteswap</h2>
					<span
						className="flex items-center gap-2 cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-400"
						onClick={() => smoothScroll("header")}
					>
						Back to top <FaArrowUp />
					</span>
				</div>

				<div className="flex flex-col py-10 gap-3">
					<h3 className="text-3xl font-medium">Social Media</h3>
					<div className="flex gap-4">
						<FaTwitter size={22} />
						<FaInstagram size={22} />
						<FaFacebook size={22} />
					</div>
					<div className="flex flex-col sm:flex-row justify-between items-end">
						<div className="flex flex-col gap-3 w-full sm:w-auto">
							<h4 className="mt-6 text-2xl font-medium">Phone</h4>
							<div className="flex flex-col font-normal gap-1 text-lg">
								<p
									id="phone1"
									className="hover:text-secondary-dark dark:hover:text-secondary-light cursor-pointer"
									onClick={() => handleCopy("phone1")}
								>
									+91 63861 89089
								</p>
								<p
									id="phone2"
									className="hover:text-secondary-dark dark:hover:text-secondary-light cursor-pointer"
									onClick={() => handleCopy("phone2")}
								>
									+91 78400 99836
								</p>
							</div>
						</div>

						<div className="flex flex-col text-lg w-full sm:w-auto">
							<h4 className="mt-6 text-2xl font-medium">
								E-Mail
							</h4>
							<NavLink
								to="mailto:jurudentyi@gmail.com"
								className="hover:text-secondary-dark dark:hover:text-secondary-light"
							>
								jurudentyi@gmail.com
							</NavLink>
							<br />
							<h4 className="text-2xl font-medium">
								Support
							</h4>
							<NavLink
								to="mailto:connect@valsco.com"
								className="hover:text-secondary-dark dark:hover:text-secondary-light"
							>
								connect@valsco.com
							</NavLink>
						</div>
					</div>
				</div>
				<div className="h-[2px] rounded-full bg-stone-600 dark:bg-white"></div>

				<div className="flex justify-between py-10">
					<h3 className="text-xl font-sans">Copyrights </h3>
					<span className="text-2xl font-medium">India</span>
				</div>

				<NavLink to="https://www.valscotech.com/" target={"_blank"}>
					<Button
						variant="rounded"
						theme="secondary"
						className="flex justify-center gap-3 w-full md:w-2/3 lg:w-1/2 mx-auto"
					>
						<LuMoveDownRight size={22} />
						Check out more Services by Valsco Tech
					</Button>
				</NavLink>
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
		</footer>
	);
};

export default Footer;
