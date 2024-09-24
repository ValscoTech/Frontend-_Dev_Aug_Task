import { NavLink } from "react-router-dom";
import { useState } from "react";
import { LuArrowDownRight } from "react-icons/lu";
import Input from "../UI/Input";
import Selector from "../UI/Selector";
import Button from "../UI/Button";
function SearchNotes({
	min = "20",
	max = "120",
	priceRange,
	setPriceRange,
	onSubmit,
}) {
	const handleChange = (e) => {
		const { name, value } = e.target;
		setPriceRange((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<section className="flex flex-col w-full my-36 md:w-11/12 lg:w-5/6 xl:w-3/4 mx-auto justify-center bg-white shadow-lg rounded-3xl p-10 m-10 gap-10">
			<h2 className="text-3xl md:text-5xl">Search Notes</h2>
			<div className="flex gap-10">
				<div className="flex flex-col w-full lg:w-7/12 gap-10">
					<div className="flex flex-col gap-2">
						<label className="text-lg md:text-xl text-slate-500">
							Price Range
						</label>
						<div className="flex gap-10 w-full">
							<Input
								id="minimum"
								min={min}
								max={max}
								value={priceRange.min}
								name="min"
								variant="filled"
								type="number"
								placeholder="Min"
								className="w-full"
								onChange={handleChange}
							/>
							<Input
								id="maximum"
								min={min}
								max={max}
								value={priceRange.max}
								name="max"
								variant="filled"
								type="number"
								placeholder="Max"
								className="w-full"
								onChange={handleChange}
							/>
						</div>
					</div>

					<Selector
						className="w-full lg:w-3/4"
						id="type"
						name="type"
						label="Type"
						options={[
							{
								id: "className",
								value: "className",
								title: "Class Notes",
							},
							{
								id: "lecture",
								value: "lecture",
								title: "Lecture Notes",
							},
						]}
					/>

					<Button
						className="flex justify-center items-center gap-2 !w-fit"
						onClick={onSubmit}
					>
						<LuArrowDownRight />
						Search Notes
					</Button>
				</div>

				<img
					src="./images/image.png"
					alt="Notes Illustration"
					className="hidden lg:block w-5/12"
				/>
			</div>
		</section>
	);
}

export default SearchNotes;
