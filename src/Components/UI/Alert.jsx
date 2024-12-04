import { useEffect, useState } from "react";

function Alert({
	message = "",
	variant = "success",
	size = "md",
	onClose = () => {},
	show = true,
}) {
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		if (show) {
			setAnimate(true);
		} else {
			setAnimate(false);
		}
	}, [show, onClose]);

	const styles = {
		success: [
			"bg-green-400 dark:bg-green-600 text-white",
			"bg-green-300 dark:bg-green-400",
		],
		info: [
			"bg-blue-400 dark:bg-blue-600 text-white",
			"bg-blue-300 dark:bg-blue-400",
		],
		warning: [
			"bg-yellow-400 dark:bg-yellow-600 text-white",
			"bg-yellow-300 dark:bg-yellow-400",
		],
		error: [
			"bg-red-400 dark:bg-red-600 text-white",
			"bg-red-300 dark:bg-red-400",
		],
		sm: "h-10",
		md: "h-16",
		lg: "h-20",
	};

	const icon = {
		success: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-7 w-7 mr-6"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
			</svg>
		),
		info: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-7 w-7 mr-6"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
			</svg>
		),
		warning: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-7 w-7 mr-6"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
			</svg>
		),
		error: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-7 w-7 mr-6"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fillRule="evenodd"
					d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
					clipRule="evenodd"
				/>
			</svg>
		),
	};

	return (
		<div className="w-full flex flex-row-reverse">
			{show && (
				<div
					className={`group shadow-md ${animate ? "w-full" : "w-0"} ${styles[variant][0]} ${styles[size]} flex justify-between items-center relative duration-100 transition-width`}
				>
					<span className="absolute w-full h-1.5 bg-slate-300 dark:bg-slate-200 bottom-0 left-0"></span>
					<span
						id="loader"
						className={`absolute h-1.5 ${animate ? "w-0" : "w-full"} ${styles[variant][1]} duration-[3000ms] transition-all ease-linear bottom-0`}
					></span>
					<div className="p-4 w-full flex items-center">
						{icon[variant]}
						<p>{message}</p>
					</div>
					<div>
						<button
							className="p-4 text-green-100 hover:text-white"
							onClick={onClose}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Alert;
