import React from "react";

function Card({ className, theme = "default", children, size = "md", onClick = null }) {
	const styles = {
		primary: "bg-primary-light dark:bg-primary-dark border-primary-light",
		secondary:
			"bg-secondary-light dark:bg-secondary-dark border-secondary-light",
		tertiary:
			"bg-tertiary-light dark:bg-tertiary-dark border-tertiary-light",
		default: "bg-white text-black",
		xs: "max-w-sm",
		sm: "max-w-md",
		md: "max-w-lg",
		lg: "max-w-xl",
		xl: "max-w-2xl",
	};

	return (
		<div
			className={`max-w-sm w-full h-full border rounded-lg shadow p-4 ${styles[theme]} ${styles[size]} ${className}`} onClick={onClick}
		>
			{children}
		</div>
	);
}

export default Card;
