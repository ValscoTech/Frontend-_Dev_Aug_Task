"use client";
import { useRef, useState } from "react";
import { LuTrash2 } from "react-icons/lu";

export default function DragAndDrop({ acceptedFileTypes }) {
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
		console.log("File has been added");
		if (e.target.files && e.target.files[0]) {
			console.log(e.target.files);
			for (let i = 0; i < e.target.files["length"]; i++) {
				setFiles((prevState) => [...prevState, e.target.files[i]]);
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
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
				setFiles((prevState) => [
					...prevState,
					e.dataTransfer.files[i],
				]);
			}
		}
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
			<form
				className={`text-slate-700 dark:text-slate-100 ${
					dragActive
						? "bg-transparent border-slate-300 opacity-80 border-dashed border-4 border-spacing-1"
						: "bg-zinc-100 dark:bg-black"
				} 
				rounded-lg text-xs min-h-40 text-center flex flex-col items-center justify-center`}
				onDragEnter={handleDragEnter}
				onSubmit={(e) => e.preventDefault()}
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
			</form>

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
			{/* <button
          className="bg-black rounded-lg p-2 mt-3 w-auto"
          onClick={handleSubmitFile}
        >
          <span className="p-2 text-white">Submit</span>
        </button> */}
		</>
	);
}
