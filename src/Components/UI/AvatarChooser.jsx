import React from "react";
import { LuPencil } from "react-icons/lu";

function AvatarChooser() {
	return (
		<div>
			<input type="file" class="hidden" />

			<div className="w-full">
				<div class="relative p-1 bg-gray-500 dark:bg-gray-100 w-fit rounded-full mx-auto">
					<img
						src="https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
						className="w-64 h-64 md:w-96 md:h-96 m-auto rounded-full shadow"
					/>
					<button className="absolute bottom-0 right-0 bg-primary text-white p-3 rounded-full -translate-x-1/2 -translate-y-1/2 md:-translate-x-3/4 md:-translate-y-3/4 hover:bg-primary-dark active:scale-90">
						<LuPencil size={20} />
					</button>
				</div>
			</div>
		</div>
	);
}

export default AvatarChooser;
