import { useState, useEffect } from "react";

function Profile() {
	const [userInfo, setUserInfo] = useState({
		name: "Adam Doe",
		email: "adam@doe.com",
		avatar: "",
		username: "adamdoe",
		phone: "081234567890",
		address: "Jl. Imam Bonjol",
		roonno: "123",
		department: "IT",
		specialization: "",
	});
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="container mx-auto p-5 text-black dark:text-white">
			<div className="flex flex-col gap-5 w-1/2"></div>
			<div className="flex flex-col gap-2 w-1/2 text-xl divide-y *:py-5">
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
	);
}

export default Profile;
