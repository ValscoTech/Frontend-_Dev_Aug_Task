import React from "react";
import { LuChevronsUpDown } from "react-icons/lu";

function Select({
	name,
	id,
	variant = "filled",
	theme = "primary",
	size = "md",
	label = "Select an option:",
	options = [],
	onChange,
}) {
	options = [{ key: "", value: "Select an option" }, ...options];

	const styles = {
		static: "py-2.5 px-2.5 border-0",
		outlined: "px-2.5 pb-2.5 pt-4 rounded-lg border-2",
		filled: "rounded-t-lg px-2.5 pb-2.5 pt-5 border-0",

		primary: [
			`${
				variant == "filled"
					? "bg-slate-100 text-slate-700"
					: "bg-transparent text-slate-700 dark:text-white"
			} focus:border-primary `,
			`text-slate-500 peer-focus:text-primary-dark dark:text-slate-200`,
			"hover:bg-primary-light hover:text-white text-black dark:text-white dark:bg-slate-700",
		],
		secondary: [
			`${
				variant == "filled"
					? "bg-slate-50 text-slate-700"
					: "bg-transparent text-slate-700 dark:text-white"
			} focus:border-secondary`,
			`text-slate-400 peer-focus:text-secondary-dark dark:text-slate-200`,
			"hover:bg-secondary-light hover:text-white text-black dark:text-white dark:bg-slate-700",
		],
		tertiary: [
			`${
				variant == "filled"
					? "bg-slate-50 text-slate-700"
					: "bg-transparent text-slate-700 dark:text-white"
			} focus:border-tertiary`,
			`text-slate-400 peer-focus:text-tertiary-dark dark:text-slate-200`,
			"hover:bg-tertiary-light hover:text-white text-black dark:text-white dark:bg-slate-700",
		],

		xs: "text-xs",
		sm: "text-sm",
		md: "text-md",
		lg: "text-lg",
		xl: "text-xl",
	};

	return (
		<div className="relative pt-5">
			<select
				id={id}
				name={name}
				className={`block peer w-full bg-slate-50 border-slate-300 focus:outline-none focus:ring-0 border-b-2 appearance-none ${styles[size]} ${styles[theme][0]} ${styles[variant]}`}
				onChange={onChange}
			>
				{options.map((option) => (
					<option
						className={`${styles[theme][2]} ${option.key == "" ? "hidden" : ""}`}
						key={option.key}
						value={option.key}
					>
						{option.value}
					</option>
				))}
			</select>
			<LuChevronsUpDown className="absolute right-0 top-1/2 -translate-x-1/2 origin pointer-events-none" />
			<label
				htmlFor={id}
				className={`top-4 -translate-y-6 peer-focus:start-0 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 absolute duration-300 transform scale-75 origin-[0] peer-focus:scale-75 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto ${styles[theme][1]}`}
			>
				{label}
			</label>
		</div>
	);
}

export default Select;
