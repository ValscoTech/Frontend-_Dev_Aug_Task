import Input from "../UI/Input";
import Select from "../UI/Select";

function DetailsSection() {
	const modules = [
		{ key: 1, value: "Module 1" },
		{ key: 2, value: "Module 2" },
		{ key: 3, value: "Module 3" },
		{ key: 4, value: "Module 4" },
		{ key: 5, value: "Module 5" },
		{ key: 6, value: "Module 6" },
		{ key: 7, value: "Module 7" },
		{ key: 8, value: "Module 8" },
		{ key: 9, value: "Module 9" },
		{ key: 10, value: "Module 10" },
	];
	const schools = [
		{ key: "scope", value: "SCOPE" },
		{ key: "sense", value: "SENSE" },
		{ key: "score", value: "SCORE" },
		{ key: "spark", value: "SPARK" },

	];


	return (
		<div className="flex flex-col justify-center lg:flex-col gap-8 w-full lg:w-1/3">
			<Input
				variant="static"
				name="title"
				id="title"
				placeholder="Title"
			/>
			<Input variant="static" name="code" id="code" placeholder="Code" />
			<Input
				variant="static"
				name="coursename"
				id="coursename"
				placeholder="Course Name"
			/>
			<Select label="Select Module" name="module" id="module" options={modules} />
			<Select label="Select School" name="school" id="school" options={schools} />
		</div>
	);
}

export default DetailsSection;
