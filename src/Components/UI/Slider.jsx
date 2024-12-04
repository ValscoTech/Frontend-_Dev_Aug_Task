import React, { useEffect } from "react";

function Slider({
	name,
	id,
	className,
	theme = "default",
	min = 0,
	max = 100,
	value,
	size = "md",
	onChange,
}) {
	useEffect(() => {
		value = (min + max) / 2;
	}, [value]);

	const styles = {
		default: "accent-slate-600 dark:accent-slate-300",
		primary: "accent-primary",
		secondary: "accent-secondary",
		tertiary: "accent-tertiary",
		sm: "h-1",
		md: "h-2.5",
		lg: "h-3.5",
	};

	return (
		<div
			className={`relative text-center flex flex-col gap-2 w-full ${className}`}
		>
			<label
				htmlFor={id}
				className="text-3xl text-slate-800 dark:text-slate-200"
			>
				{value}
			</label>
			<input
				id={id}
				type="range"
				value={value}
				min={min}
				max={max}
				onChange={onChange}
				className={`w-full rounded-3xl appearance-none cursor-pointer outline-none bg-slate-200 dark:bg-slate-700 ${styles[theme]} ${styles[size]} `}
			/>
		</div>
	);
}

export default Slider;
