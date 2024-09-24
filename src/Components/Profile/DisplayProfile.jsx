import { useState } from "react";
import Button from "../UI/Button";
import { LuSunMedium } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";

function DisplayProfile({ userInfo, setIsEdit }) {
	const [theme, setTheme] = useState("dark");
	const changeTheme = () => {
		const elem = document.getElementsByTagName("html")[0];

		if (theme === "dark") {
			elem.classList.remove("dark");
			setTheme("light");
		} else {
			setTheme("dark");
			elem.classList.add("dark");
		}
	};

	return (
		<div>
			<div className="flex justify-end w-full gap-5">
				<Button
					className="!px-16 !w-fit"
					onClick={() => setIsEdit(true)}
				>
					Edit
				</Button>
				<button
					className="hover:text-gray-500 active:scale-90"
					onClick={changeTheme}
				>
					<LuSunMedium size={30} />
				</button>
			</div>
			<div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
				<div className="flex flex-col gap-5 w-full lg:w-1/2 py-10">
					<div className="relative p-1 bg-gray-300 dark:bg-gray-100 rounded-full mx-auto w-64 h-64 md:w-96 md:h-96 m-auto shadow">
						{userInfo && userInfo.profile !== "" ? (
							<img
								src={userInfo.profile}
								alt="Profile"
								className="rounded-full"
							/>
						) : (
							<FaUserCircle className="w-full h-full text-slate-800" />
						)}
					</div>
				</div>
				<div className="flex flex-col w-full lg:w-1/2 text-xl divide-y divide-slate-500 *:py-5">
					<p>Name: {userInfo.name}</p>
					<p>Room No: {userInfo.roomno}</p>
					<p>Department: {userInfo.department}</p>
					<p>
						Specialization:{" "}
						{userInfo.specialization === ""
							? "None"
							: userInfo.specialization}
					</p>
					<p></p>
				</div>
			</div>
		</div>
	);
}

export default DisplayProfile;
