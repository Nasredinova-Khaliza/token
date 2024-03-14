import React, { useState } from "react";
import Input from "../../customInput/CustomInput";
import Button, { ButtonProps } from "../../customButton/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "../../../redux/api/usersApi";
import scss from "./RegisterForm.module.scss";
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
		<div className={scss.RegisterFormPage}>
			<form onSubmit={handleSubmit} className={scss.card}>
				<h3>Вход</h3>
				<div className={scss.registerInputs}>
					<Input
						type="email"
						placeholder="Введите email"
						value={email}
						onChange={handleGetEmail}
						width="300px"
					/>
					<Input
						type="password"
						placeholder="Введите password"
						value={password}
						onChange={handleGetPassword}
						width="300px"
					/>
					<Input
						type="text"
						placeholder="Введите name"
						value={userName}
						onChange={handleGetUserName}
						width="300px"
					/>
					<Link to="/login" className={scss.link}>
						Есть аккаунт
					</Link>
					<Button {...loginButtonProps}>Registration</Button>
				</div>
			</form>
		</div>
	);
};
export default RegisterForm;
