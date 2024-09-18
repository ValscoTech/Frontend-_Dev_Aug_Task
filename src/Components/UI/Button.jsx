import React from "react";

function Button({
	className,
	type = "button",
	variant = "filled",
	theme = "primary",
	name,
	id,
	text,
	size = "md",
	children,
	onClick = () => {},
}) {
	const btnStyles = {
		outlined: "hover:text-white border-2 rounded-lg !bg-transparent",
		rounded: "rounded-full",
		filled: "rounded-lg",

		primary: `${
			variant == "outlined"
				? "hover:bg-primary-dark dark:hover:bg-primary-light text-primary border-primary-dark dark:border-primary-light"
				: "bg-primary active:bg-primary-dark dark:active:bg-primary-light text-white"
		} active:ring-primary`,
		secondary: `${
			variant == "outlined"
				? "hover:bg-secondary-dark dark:hover:bg-secondary-light text-secondary border-secondary-dark dark:border-secondary-light"
				: "bg-secondary active:bg-secondary-dark dark:active:bg-secondary-light text-white"
		} active:ring-secondary`,
		tertiary: `${
			variant == "outlined"
				? "hover:bg-tertiary-dark dark:hover:bg-tertiary-light text-tertiary border-tertiary-dark dark:border-tertiary-light"
				: "bg-tertiary active:bg-tertiary-dark dark:active:bg-tertiary-light text-slate-600"
		} active:ring-tertiary`,
		monochrome: `bg-slate-800 border-slate-800 dark:border-slate-50 text-white dark:bg-slate-50 dark:text-black !shadow-none`,

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
			type={type}
			className={`w-full active:scale-95 origin-bottom font-medium hover:shadow-lg duration-300 outline-none ring-0 active:ring-0 active:outline-none px-5 py-2.5 text-center ${btnStyles[variant]} ${btnStyles[theme]} ${btnStyles[size]} ${className}`}
			onClick={onClick}
		>
			{children}
			{text}
		</button>
	);
}

export default Button;
