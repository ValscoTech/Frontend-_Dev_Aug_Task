import { LuArrowDownRight } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AppPromotion = () => {
	return (
		<section className="flex w-full my-20 md:w-11/12 lg:w-5/6 xl:w-3/4 mx-auto items-center justify-center bg-zinc-100 shadow-lg rounded-3xl p-10 m-10 gap-10">
			<div className="flex flex-col w-2/3 items-start gap-20">
				<h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
					Have you Tried our App?
					<br />
					Notes on the GO
				</h2>
				<NavLink
					to="https://play.google.com/store/apps/details?id=com.jurident.valsco&hl=en-IN"
					target={"_blank"}
				>
					<Button className="flex items-center justify-center gap-2">
						<LuArrowDownRight />
						<p>
							Download{" "}
							<span className="hidden md:inline">RentSwap</span>
						</p>
					</Button>
				</NavLink>
			</div>
			<img
				src="./images/Phone.png"
				alt="Phone App"
				className="w-16 sm:w-20 md:w-28 lg:w-36 xl:w-48"
			/>
		</section>
	);
};

export default AppPromotion;
