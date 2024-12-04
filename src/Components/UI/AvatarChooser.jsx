import React from "react";
import { LuPencil } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";

function AvatarChooser({ image }) {
	return (
		<div>
			<input type="file" className="hidden" />

			<div className="w-full">
				<div className="relative p-1 bg-gray-200 dark:bg-gray-100 rounded-full mx-auto w-64 h-64 md:w-96 md:h-96 m-auto shadow">
					{image !== "" ? (
						<img
							src={image}
							alt="Profile"
							className="rounded-full"
						/>
					) : (
						<FaUserCircle className="w-full h-full text-slate-800" />
					)}
					<button className="absolute bottom-0 right-0 bg-primary text-white p-3 rounded-full -translate-x-1/2 -translate-y-1/2 md:-translate-x-3/4 md:-translate-y-3/4 hover:bg-primary-dark active:scale-90">
						<LuPencil size={20} />
					</button>
				</div>
			</div>
		</div>
	);
}

export default AvatarChooser;
