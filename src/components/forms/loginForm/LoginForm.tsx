import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../redux/api/loginApi";
import Button, { ButtonProps } from "../../customButton/CustomButton";
import Input from "../../customInput/CustomInput";
const LoginForm: React.FC = () => {
	const navigate = useNavigate();
	const [login] = useLoginMutation();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleGetEmail = (value: string) => {
		setEmail(value);
	};
	const handleGetPassword = (value: string) => {
		setPassword(value);
	};
	const loginButtonProps: ButtonProps = {
		type: "submit",
		variant: "primary",
		color: "blue",
		width: "300px",
	};
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const result = await login({ email, password });
		if ("data" in result) {
			const { token } = result.data;
			localStorage.setItem("token", token);
			localStorage.setItem("isAuth", "true");
			setEmail("");
			setPassword("");
			navigate("/");
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<h3>Вход</h3>
			<Input
				type="email"
				label="Email"
				placeholder="Введите сообщение"
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
			<Link to="/registration">Нет аккаунта зарегистируйтесь</Link>
			<div>
				<Button {...loginButtonProps}>Войти</Button>
			</div>
		</form>
	);
};
export default LoginForm;
