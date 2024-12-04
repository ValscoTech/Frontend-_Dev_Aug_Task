import React from "react";
import Card from "./Card";

function NotesCard({ note, theme = "default", onClick = null }) {
	const styles = {
		default: "bg-white",
		primary: "bg-primary-light",
		secondary: "bg-secondary-light",
		tertiary: "bg-tertiary-light",
	};
	return (
		<Card
			className={`duration-300 flex flex-col justify-between gap-3 ${onClick ? "cursor-pointer hover:opacity-75 active:scale-105" : null}`}
			size="sm"
			theme={theme}
			onClick={onClick}
		>
			<div className="flex flex-col gap-2 justify-end ">
				<div className="flex items-center gap-5">
					<h4 className="text-xl font-light">
						{note.code.toUpperCase()}
					</h4>
					<div className="font-normal px-8 rounded-md bg-primary">
						{note.school.toUpperCase()}
					</div>
				</div>
				<div className="flex flex-col">
					<div className="flex items-center gap-2 justify-between">
						<h3 className="text-xl font-medium">
							{note.title
								.split(" ")
								.map(
									(word) =>
										word.charAt(0).toUpperCase() +
										word.slice(1).toLowerCase(),
								)
								.join(" ")}
						</h3>
						<div className="p-2 rounded-xl outline outline-1 outline-black gap-4">
							<div className="flex items-center gap-2">
								<p className="text-sm text-wrap max-w-min">
									Modules Covered
								</p>
								<p className="text-4xl font-medium">
									{note.module}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex">
				{note.previews.slice(0, 2).map((preview, idx) => (
					<img
						key={idx}
						className="flex w-1/2"
						src={preview}
						alt="Notes"
					/>
				))}
			</div>
		</Card>
	);
}

export default NotesCard;
