import React from "react";

function Checkbox({ id, name, label }) {
	return (
		<div className="flex items-center">
			<input
				id={id}
				name={name}
				type="checkbox"
				value=""
				className="w-4 h-4 accent-primary-dark bg-gray-100 border-gray-300 rounded focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
			/>
			<label
				htmlFor={id}
				className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-700"
			>
				{label}
			</label>
		</div>
	);
}

export default Checkbox;
