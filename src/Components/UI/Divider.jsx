import React from "react";

function Divider({ className, children }) {
	return (
		<>
			<div
				className={`py-3 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-400 before:me-6 after:flex-1 after:border-t after:border-gray-400 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600 ${className}`}
			>
				{children}
			</div>
		</>
	);
}

export default Divider;
