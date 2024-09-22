import { useState } from "react";
import AvatarChooser from "../UI/AvatarChooser";
import Input from "../UI/Input";
import Button from "../UI/Button";

function EditProfile({
	userInfo,
	setIsEdit,
	addAlert,
	updateUser,
	handleLogout,
}) {
	const [form, setForm] = useState(userInfo);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (form.name.trim() === "") {
			addAlert("Name is required", "warning");
			return;
		}
		if (form.roomno.trim() === "") {
			addAlert("Room No. is required", "warning");
			return;
		}
		if (form.department.trim() === "") {
			addAlert("Department is required", "warning");
			return;
		}

		// check if any data is chaneged or not
		if (userInfo === form) {
			addAlert("No changes made", "warning");
		} else {
			addAlert("Profile updated successfully", "success");
			updateUser(form);
		}
		setIsEdit(false);
	};

	return (
		<div className="flex flex-col gap-5">
			<div className="flex flex-col lg:flex-row gap-10 justify-center items-center">
				<div className="flex flex-col gap-5 w-full lg:w-1/2 py-10">
					<AvatarChooser image={userInfo.profile} />
				</div>
				<div className="flex flex-col gap-6 w-full lg:w-1/2">
					<Input
						variant="static"
						placeholder="Name"
						value={form.name}
						id="name"
						name="name"
						onChange={handleChange}
					/>
					<Input
						variant="static"
						placeholder="Room No."
						value={form.roomno}
						id="roomno"
						name="roomno"
						onChange={handleChange}
					/>
					<Input
						variant="static"
						placeholder="Department"
						value={form.department}
						id="department"
						name="department"
						onChange={handleChange}
					/>
					<Input
						variant="static"
						placeholder="Specialization"
						value={form.specialization}
						id="specialization"
						name="specialization"
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="flex flex-col gap-5 w-3/4 mt-10 sm:w-1/2 mx-auto">
				<Button className="w-fit" onClick={handleSubmit}>
					Save
				</Button>
				<Button className="w-fit" onClick={handleLogout}>
					Log Out
				</Button>
			</div>
		</div>
	);
}

export default EditProfile;
