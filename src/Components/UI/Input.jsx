import React from "react";

function Input({
	className = "",
	inputClassName = "",
	labelClassName = "",
	variant = "filled",
	type = "text",
	theme = "primary",
	name,
	id,
	placeholder = "Enter a value",
	value,
	size = "md",
	onChange,
}) {
	const styles = {
		static: [
			"py-2.5 px-0 border-0",
			"top-3 -z-1 -translate-y-6 peer-focus:start-0 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6",
		],
		outlined: [
			"px-2.5 pb-2.5 pt-4 rounded-lg border-2",
			"-translate-y-4 top-2 -z-1 bg-white dark:bg-black px-2 peer-focus:px-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 start-1",
		],
		filled: [
			"rounded-t-lg px-2.5 pb-2.5 pt-5 border-0",
			"-translate-y-4 top-4 -z-1 start-2.5 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4",
		],

		primary: [
			`${
				variant == "filled"
					? "bg-slate-100 text-slate-700"
					: "bg-transparent text-slate-700 dark:text-white"
			} ${variant == "outlined" ? "focus:border-primary" : ""} `,
			`text-slate-500 peer-focus:text-primary-dark ${variant == "filled" ? "dark:text-slate-500" : "dark:text-slate-200"}`,
		],
		secondary: [
			`${
				variant == "filled"
					? "bg-slate-50 text-slate-700"
					: "bg-transparent text-slate-700 dark:text-white"
			} ${variant == "outlined" ? "focus:border-secondary" : ""}`,
			`text-slate-400 peer-focus:text-secondary-dark ${variant == "filled" ? "dark:text-slate-500" : "dark:text-slate-200"}`,
		],
		tertiary: [
			`${
				variant == "filled"
					? "bg-slate-50 text-slate-700"
					: "bg-transparent text-slate-700 dark:text-white"
			} ${variant == "outlined" ? "focus:border-tertiary" : ""}`,
			`text-slate-400 peer-focus:text-tertiary-dark ${variant == "filled" ? "dark:text-slate-500" : "dark:text-slate-200"}`,
		],

		xs: "text-xs",
		sm: "text-sm",
		md: "text-md",
		lg: "text-lg",
		xl: "text-xl",
	};

	return (
		<div className={`relative ${className}`}>
			<input
				className={`block peer w-full border-slate-300 appearance-none focus:outline-none focus:ring-0  border-b-2 ${styles[variant][0]} ${styles[theme][0]} ${styles[size]} ${inputClassName}`}
				type={type}
				id={id}
				name={name}
				placeholder=" "
				value={value}
				onChange={onChange}
			/>
			{variant != "outlined" && (
				<span className={`absolute bottom-0 left-0 w-0 h-[3px] peer-focus:w-full transition-all duration-300 ease-in-out bg-${theme}`}></span>
			)}
			<label
				htmlFor={id}
				className={`absolute duration-300 transform scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-focus:scale-75 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto ${styles[variant][1]} ${styles[theme][1]} ${labelClassName}`}
			>
				{placeholder}
			</label>
		</div>
	);
}

export default Input;
