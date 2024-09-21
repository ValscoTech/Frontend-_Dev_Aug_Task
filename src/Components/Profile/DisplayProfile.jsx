import { useState } from "react";
import Button from "../UI/Button";
import { LuSunMedium } from "react-icons/lu";

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
				<Button className="!px-16 !w-fit" onClick={() => setIsEdit(true)}>
					Edit
				</Button>
				<button className="hover:text-gray-500 active:scale-90" onClick={changeTheme}>
					<LuSunMedium size={30} />
				</button>
			</div>
			<div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
				<div className="flex flex-col gap-5 w-full lg:w-1/2 py-10">
					<div class="relative p-1 bg-gray-500 dark:bg-gray-100 w-fit rounded-full mx-auto">
						<img
							src="https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
							className="w-64 h-64 md:w-96 md:h-96 m-auto rounded-full shadow"
						/>
					</div>
				</div>
				<div className="flex flex-col gap-2 w-full lg:w-1/2 text-xl divide-y *:py-5">
					<p>Name: {userInfo.name}</p>
					<p>Room No: {userInfo.roonno}</p>
					<p>Department: {userInfo.department}</p>
					<p>
						Specialization:{" "}
						{userInfo.specialization === ""
							? "None"
							: userInfo.specialization}
					</p>
				</div>
			</div>
		</div>
	);
}

export default DisplayProfile;
