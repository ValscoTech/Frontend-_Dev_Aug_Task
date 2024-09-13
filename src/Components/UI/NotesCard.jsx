import React from "react";
import Card from "./Card";

function NotesCard({ note, theme = "default" }) {
	const styles = {
		default: "bg-white",
		primary: "bg-primary-light",
		secondary: "bg-secondary-light",
		tertiary: "bg-tertiary-light",
	};
	return (
		<Card size="sm" theme={theme}>
			<div className="flex flex-col gap-2 justify-end">
				<div className="flex items-center gap-5">
					<h4 className="text-lg font-light">{note.courseCode}</h4>
					<div className="font-normal px-8 rounded-md bg-primary">
						{note.schoolName}
					</div>
				</div>
				<div className="flex flex-col">
					<div className="flex items-center gap-2 justify-between">
						<h3 className="text-xl font-medium">
							{note.courseName}
						</h3>
						<div className="p-2 rounded-xl outline outline-1 outline-black gap-4">
							<div className="flex items-center gap-2">
								<p className="text-sm text-wrap max-w-min">Modules Covered</p>
								<p className="text-4xl font-medium">
									{note.modulesCovered}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<img
				className="object-contain m-auto h-36 md:h-44 lg:h-52 xl:h-60"
				src={note.previewImage}
				alt="Notes"
			/>
		</Card>
	);
}

export default NotesCard;
