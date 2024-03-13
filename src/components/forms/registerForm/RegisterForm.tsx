import React, { useState } from "react";
import Input from "../../customInput/CustomInput";
import Button, { ButtonProps } from "../../customButton/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "../../../redux/api/usersApi";
const RegisterForm: React.FC = () => {
	const navigate = useNavigate();
	const [createUser] = useCreateUserMutation();
	const [email, setEmail] = useState("");
	const [userName, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleGetEmail = (value: string) => {
		setEmail(value);
	};
	const handleGetPassword = (value: string) => {
		setPassword(value);
	};
	const handleGetUserName = (value: string) => {
		setUsername(value);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const result = await createUser({ email, password, userName });
		if (result) {
			setEmail("");
			setPassword("");
			setUsername("");
			navigate("/login");
		}
	};
	const loginButtonProps: ButtonProps = {
		type: "submit",
		variant: "primary",
		color: "blue",
		width: "300px",
	};

	return (
		<form onSubmit={handleSubmit}>
			<h3>Вход</h3>
			<Input
				type="email"
				label="Email"
				placeholder="Введите email"
				value={email}
				onChange={handleGetEmail}
				width="300px"
			/>
			<Input
				type="password"
				label="Password"
				placeholder="Введите password"
				value={password}
				onChange={handleGetPassword}
				width="300px"
			/>
			<Input
				type="text"
				label="name"
				placeholder="Введите name"
				value={userName}
				onChange={handleGetUserName}
				width="300px"
			/>
			<div>
				<Link to="/login">Есть аккаунт</Link>
				<Button {...loginButtonProps}>Registration</Button>
			</div>
		</form>
	);
};
export default RegisterForm;
