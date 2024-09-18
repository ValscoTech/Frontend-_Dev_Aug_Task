import React from "react";
import { LuMoveRight } from "react-icons/lu";

function Selector({
	className,
	name,
	options,
	theme = "primary",
	label = "Title",
	value,
	onChange,
	optionsNumber = 2,
}) {
	const styles = {
		primary: `bg-dark:peer-checked:text-primary peer-checked:border-primary-dark peer-checked:text-primary-dark`,
		secondary: `bg-dark:peer-checked:text-secondary peer-checked:border-secondary-dark peer-checked:text-secondary-dark`,
		tertiary: `bg-dark:peer-checked:text-tertiary peer-checked:border-tertiary-dark peer-checked:text-tertiary-dark`,
		2: "grid-cols-2",
		3: "grid-cols-3",
		4: "grid-cols-4",
	};

	return (
		<div className={className}>
			<h3 className="text-lg md:text-xl text-slate-500 mb-2">{label}</h3>
			<ul className={`grid w-full gap-6 md:${styles[optionsNumber]}`}>
				{options.map((option, index) => (
					<li key={index}>
						<input
							type="radio"
							id={option.id}
							name={name}
							value={option.value}
							className="hidden peer"
							
						/>
						<label
							htmlFor={option.id}
							className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700  hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 ${styles[theme]}`}
						>
							<div className="block">
								<div className="w-full text-lg font-semibold">
									{option.title}
								</div>
								{option.content ? <p>{option.content}</p> : null}
							</div>
							<LuMoveRight />
						</label>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Selector;
