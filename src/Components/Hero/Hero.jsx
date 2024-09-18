import { LuArrowDownRight } from "react-icons/lu";
import Button from "../UI/Button";
import { NavLink } from "react-router-dom";

const Hero = () => {
	return (
		<section className="flex dark:text-white text-center py-5 items-center my-20">
			<div className="flex flex-col items-start text-left gap-16 w-2/3">
				<h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
					Want to earn some{" "}
					<b style={{ fontWeight: "bold", color: "yellow" }}>
						Side hustle
					</b>{" "}
					from all that{" "}
					<b style={{ fontWeight: "bold", color: "yellow" }}>
						Hardwork
					</b>{" "}
					you do in making{" "}
					<b style={{ fontWeight: "bold", color: "yellow" }}>Notes</b>
					?
				</h1>
				<NavLink to="rent">
					<Button
						id="rentNotes"
						className="flex items-center gap-3"
						size="lg"
					>
						<LuArrowDownRight />
						RENT NOTES
					</Button>
				</NavLink>
			</div>
			<img
				className="w-1/3"
				src="./images/vector.svg"
				alt="Person with Pencil"
			/>
		</section>
	);
};

export default Hero;
