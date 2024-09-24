import { NavLink } from "react-router-dom";
import { LuMail, LuUser2, LuLock } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Divider from "../UI/Divider";

const RegisterForm = ({ setState, addAlert }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");

	const signinWithGoogle = useGoogleLogin({
		onSuccess: (tokenResponse) => console.log(tokenResponse),
		onError: () => console.log("Login Failed"),
	});

	const handleSignUp = (e) => {
		e.preventDefault();

		if (email === "" || password === "" || name === "") {
			addAlert("Please fill all fields", "warning");
			return;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			addAlert("Please enter a valid email.", "warning");
			return;
		}

		addAlert("Form Submitted", "success");
	};

	return (
		<form className="flex flex-col w-full px-5 py-10 gap-10 min-w-fit items-center font-sans rounded-lg bg-slate-100 border border-slate-300 shadow text-black">
			<h2 className="text-3xl font-semibold">SIGN UP</h2>
			<div className="w-3/4 flex flex-col items-center gap-8">
				<div className="flex flex-col gap-5 w-full">
					<Input
						id="email"
						name="email"
						placeholder="Email"
						inputClassName="!text-black"
						labelClassName="!text-slate-700 !bg-slate-100"
						variant="outlined"
						icon={<LuMail />}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<Input
						id="password"
						name="password"
						type="password"
						placeholder="Password"
						inputClassName="!text-black"
						labelClassName="!text-slate-700 !bg-slate-100"
						variant="outlined"
						icon={<LuLock />}
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<Input
						id="name"
						name="name"
						placeholder="Name"
						inputClassName="!text-black"
						labelClassName="!text-slate-700 !bg-slate-100"
						variant="outlined"
						icon={<LuUser2 />}
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<Button
					className="!rounded dark:!bg-slate-800 dark:!border-slate-800 dark:!text-white"
					variant="filled"
					theme="monochrome"
					size="large"
					onClick={handleSignUp}
				>
					Sign up
				</Button>

				<Divider className="!text-slate-700 w-full">or</Divider>

				<p className="signup-footer">
					Already Have an account?
					<span
						className="pl-3 text-primary font-semibold cursor-pointer"
						onClick={() => setState("login")}
					>
						Login
					</span>
				</p>

				<div className="w-full flex flex-col gap-3">
					<Button
						className="flex items-center gap-2 justify-center !rounded !border !text-black !bg-white !border-black"
						variant="filled"
						theme="monochrome"
						size="large"
						onClick={signinWithGoogle}
					>
						<FcGoogle />
						Continue with Google
					</Button>

					<Button
						className="flex items-center gap-2 justify-center"
						variant="filled"
						theme="secondary"
						size="large"
					>
						<FaFacebookF />
						Continue with Facebook
					</Button>
				</div>
			</div>
		</form>
	);
};

export default RegisterForm;
