"use client";
import React, { useActionState } from "react";
import { handleLogin, handleRegister } from "../_actions/authActions";

const inputClassName =
	"bg-transparent w-full border-b border-lightorange px-2 py-1 text-secondary outline-none focus:border-secondary font-light";
const buttonClassName =
	"py-2 px-7 hover:bg-secondary w-auto  hover:text-white text-black border-secondary border hover:border-none font-silka";

const AuthenticationForm = () => {
	const initialState = {
		message: "",
	};
	const [authType, setAuthType] = React.useState("login");
	const [formState, formAction] = useActionState(
		authType === "login" ? handleLogin : handleRegister,
		initialState,
	);
	console.log(formState);
	//
	return (
		<form action={formAction} className="font-silka">
			<h1 className="text-center text-4xl  font-regis  text-secondary">
				Ottelo.
			</h1>
			<input type="hidden" name="redirectTo" value="" />
			<h3 className="w-full text-left mt-6 opacity-60">
				{authType === "login" ? "Sign in" : "Sign up"}
			</h3>

			<div className="mt-8 flex flex-col gap-9">
				<input
					type="text"
					className={inputClassName}
					name="username"
					required
					placeholder="username"
					minLength={3}
				/>

				<input
					name="password"
					className={inputClassName}
					required
					type="password"
					placeholder="password"
				/>
			</div>

			<button
				className={`${buttonClassName} mt-8`}
				type="submit"
				name="buttonVal"
				value={authType === "login" ? "login" : "register"}
			>
				{authType === "login" ? "Login" : "Register"}
			</button>
			<div className="flex flex-col gap-6 mt-12">
				<h2 className="opacity-60 font-light font-silka">
					{authType === "login"
						? "Dont have an account?"
						: "Already have an account?"}
				</h2>
				<button
					type="button"
					className={buttonClassName}
					onClick={() => {
						return authType === "login"
							? setAuthType("register")
							: setAuthType("login");
					}}
				>
					{authType === "login" ? "Create a new account" : "Login"}
				</button>
			</div>
		</form>
	);
};

export default AuthenticationForm;
