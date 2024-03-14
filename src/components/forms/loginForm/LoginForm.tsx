import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../redux/api/loginApi";
import Button, { ButtonProps } from "../../customButton/CustomButton";
import Input from "../../customInput/CustomInput";
import scss from "./LoginForm.module.scss";

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
		<form onSubmit={handleSubmit} className={scss.loginForm}>
			<h3>Вход</h3>
			<div className={scss.content}>
				<>
					<Input
						type="email"
						placeholder="Введите ваш email"
						value={email}
						onChange={handleGetEmail}
						width="300px"
					/>
					<Input
						type="password"
						placeholder="Введите ваш пароль"
						value={password}
						onChange={handleGetPassword}
						width="300px"
					/>
					<Link to="/register" className={scss.registerLink}>
						Нет аккаунта? Зарегистрируйтесь
					</Link>
					<div>
						<Button {...loginButtonProps}>Войти</Button>
					</div>
				</>
			</div>
		</form>
	);
};

export default LoginForm;
