import React from "react";

function Button({
	className,
	variant = "filled",
	theme = "primary",
	name,
	id,
	text,
	size = "md",
	children,
}) {
	const btnStyles = {
		outlined: "hover:text-white border-2 rounded-lg",
		rounded: "rounded-full",
		filled: "rounded-lg",

		primary: `${
			variant == "outlined"
				? "hover:bg-primary-dark dark:hover:bg-primary-light text-primary border-primary-dark dark:border-primary-light"
				: "bg-primary focus:bg-primary-dark dark:focus:bg-primary-light text-white"
		} focus:ring-primary`,
		secondary: `${
			variant == "outlined"
				? "hover:bg-secondary-dark dark:hover:bg-secondary-light text-secondary border-secondary-dark dark:border-secondary-light"
				: "bg-secondary focus:bg-secondary-dark dark:focus:bg-secondary-light text-white"
		} focus:ring-secondary`,
		tertiary: `${
			variant == "outlined"
				? "hover:bg-tertiary-dark dark:hover:bg-tertiary-light text-tertiary border-tertiary-dark dark:border-tertiary-light"
				: "bg-tertiary focus:bg-tertiary-dark dark:focus:bg-tertiary-light text-white"
		} focus:ring-tertiary`,

		xs: "text-xs",
		sm: "text-sm",
		md: "text-md",
		lg: "text-lg",
		xl: "text-xl",
	};

	return (
		<button
			name={name}
			id={id}
			className={`w-full font-medium hover:shadow-lg duration-300 outline-none ring-0 focus:ring-2 focus:outline-none px-5 py-2.5 me-2 mb-2 text-center ${btnStyles[variant]} ${btnStyles[theme]} ${btnStyles[size]} ${className}`}
		>
			{children}
			{text}
		</button>
	);
}

export default Button;
