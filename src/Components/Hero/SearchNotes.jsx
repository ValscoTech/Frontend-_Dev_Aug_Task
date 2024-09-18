import { NavLink } from "react-router-dom";
import { LuArrowDownRight } from "react-icons/lu";
import Input from "../UI/Input";
import Selector from "../UI/Selector";
import Button from "../UI/Button";
const SearchNotes = () => {
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
								min={20}
								max={120}
								name="minimum"
								variant="filled"
								type="number"
								placeholder="Min"
								className="w-full"
							/>
							<Input
								id="
							maximum"
								min={20}
								max={120}
								name="maximum"
								variant="filled"
								type="number"
								placeholder="Max"
								className="w-full"
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

					<NavLink to="/notes">
						<Button className="flex justify-center items-center gap-2 !w-auto">
							<LuArrowDownRight />
							Search Notes
						</Button>
					</NavLink>
				</div>

				<img
					src="./images/image.png"
					alt="Notes Illustration"
					className="hidden lg:block w-5/12"
				/>
			</div>
		</section>
	);
};

export default SearchNotes;
