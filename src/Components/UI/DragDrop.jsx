"use client";
import { useRef, useState } from "react";
import { LuTrash2 } from "react-icons/lu";

export default function DragAndDrop({ acceptedFileTypes, addAlert }) {
	const [dragActive, setDragActive] = useState(false);
	const inputRef = useRef(null);
	const [files, setFiles] = useState([]);

	function handleFileName(name, limit) {
		if (name.length > limit) {
			return name.slice(0, limit) + "...";
		} else return name;
	}

	function handleChange(e) {
		e.preventDefault();
		if (e.target.files && e.target.files[0]) {
			for (let i = 0; i < e.target.files["length"]; i++) {
				if (files.some((f) => f.name === e.target.files[i].name)) {
					addAlert("No duplicate files are allowed.", "error");
					return;
				}
				setFiles((prevState) => [...prevState, e.target.files[i]]);
				addAlert("File uploaded successfully.", "success");
			}
		}
	}

	function handleSubmitFile(e) {
		if (files.length === 0) {
			// no file has been submitted
		} else {
			// write submit logic here
		}
	}

	function handleDrop(e) {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);

		const newFiles = Array.from(e.dataTransfer.files).filter((file) =>
			acceptedFileTypes.includes(
				"." + file.name.split(".").pop().toLowerCase(),
			),
		);
		if (newFiles.length !== e.dataTransfer.files.length) {
			addAlert(
				"Allowed file types: " +
					acceptedFileTypes
						.map((type) => type.slice(1))
						.join(", ")
						.toUpperCase(),
				"error",
			);
		}

		for (let file of e.dataTransfer.files) {
			if (newFiles.some((f) => f.name === file.name)) {
				addAlert("No duplicate files are allowed.", "error");
				return;
			}
		}

		setFiles((prevState) => [...prevState, ...newFiles]);
	}

	function handleDragLeave(e) {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);
	}

	function handleDragOver(e) {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(true);
	}

	function handleDragEnter(e) {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(true);
	}

	function removeFile(fileName, idx) {
		const newArr = [...files];
		newArr.splice(idx, 1);
		setFiles([]);
		setFiles(newArr);
	}

	function openFileExplorer() {
		inputRef.current.value = "";
		inputRef.current.click();
	}

	return (
		<>
			<div
				className={`text-slate-700 dark:text-slate-100 ${
					dragActive
						? "bg-transparent border-slate-300 opacity-80 border-dashed border-4 border-spacing-1"
						: "bg-zinc-100 dark:bg-black"
				} 
				rounded-lg text-xs min-h-40 text-center flex flex-col items-center justify-center`}
				onDragEnter={handleDragEnter}
				onDrop={handleDrop}
				onDragLeave={handleDragLeave}
				onDragOver={handleDragOver}
			>
				<input
					placeholder="fileInput"
					className="hidden"
					ref={inputRef}
					type="file"
					multiple={true}
					onChange={handleChange}
					accept={acceptedFileTypes.join(",")}
				/>
				<img
					className="w-1/4 hover:drop-shadow-md max-w-24"
					src="/images/folder.png"
					alt="Upload Files"
					onClick={openFileExplorer}
				/>
				<p className="text-sm py-1">Drag and drop your files here</p>
			</div>

			<div className="flex flex-col items-center pr-0.5 my-1 gap-1 h-48 overflow-y-auto">
				{files.map((file, idx) => (
					<div
						key={idx}
						className="flex flex-row w-full justify-between items-center text-sm rounded-md bg-transparent p-2 text-slate-800 dark:text-white"
					>
						<span>{handleFileName(file.name, 42)}</span>
						<span
							className="text-blue-slate-500 cursor-pointer hover:text-red-500"
							onClick={() => removeFile(file.name, idx)}
						>
							<LuTrash2 className="w-4 h-4" />
						</span>
					</div>
				))}
			</div>
		</>
	);
}
