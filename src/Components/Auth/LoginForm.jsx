import { NavLink } from "react-router-dom";
import { LuMail, LuUser2, LuLock } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";

import Button from "../UI/Button";
import Input from "../UI/Input";
import Divider from "../UI/Divider";
import Checkbox from "../UI/Checkbox";

const LoginForm = ({ setState, addAlert, isFacebookReady, handleFBAuth }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	const handleLogin = (e) => {
		e.preventDefault();
		if (email === "" || password === "") {
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

	const handleGoogleAuth = useGoogleLogin({
		onSuccess: (tokenResponse) => {
			addAlert("Auth through google was successful!", "success");
			console.log(tokenResponse);
		},
		onError: () => {
			addAlert("Failed to authorize user", "error");
			console.log("Login Failed");
		},
	});

	return (
		<form className="flex flex-col w-full px-5 py-10 gap-10 min-w-fit items-center font-sans rounded-lg bg-slate-100 border border-slate-300 shadow text-black">
			<h2 className="text-3xl font-semibold">LOG IN</h2>
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

					<div className="flex flex-col gap-2 mt-4">
						<Checkbox
							id="remember"
							name="remember"
							label="Remember me"
							checked={rememberMe}
							onChange={() => setRememberMe(!rememberMe)}
						/>
						<p className="text-sm text-slate-500">
							Forgot your password?{" "}
							<NavLink
								className="text-primary font-semibold"
								to=""
							>
								Reset it
							</NavLink>
						</p>
					</div>
				</div>

				<Button
					className="!rounded dark:!bg-slate-800 dark:!border-slate-800 dark:!text-white"
					variant="filled"
					theme="monochrome"
					size="large"
					onClick={handleLogin}
				>
					Log In
				</Button>

				<Divider className="!text-slate-700 w-full">or</Divider>

				<p className="signup-footer">
					Don't have an account?
					<span
						className="pl-3 text-primary font-semibold cursor-pointer"
						onClick={() => setState("register")}
					>
						Sign Up
					</span>
				</p>

				<div className="w-full flex flex-col gap-3">
					<Button
						className="flex items-center gap-2 justify-center !rounded !border !text-black !bg-white !border-black"
						variant="filled"
						theme="monochrome"
						size="large"
						onClick={handleGoogleAuth}
					>
						<FcGoogle />
						Continue with Google
					</Button>

					<Button
						className="flex items-center gap-2 justify-center"
						variant="filled"
						theme="secondary"
						size="large"
						onClick={handleFBAuth}
						disabled={!isFacebookReady}
					>
						<FaFacebookF />
						Continue with Facebook
					</Button>
				</div>
			</div>
		</form>
	);
};

export default LoginForm;
