import React from "react";
// import styles from "./LoginPage.module.scss";
import LoginForm from "../../forms/loginForm/LoginForm";
import styles from "./Login.module.scss";

const LoginPage: React.FC = () => {
	return (
		<div className={styles.loginPage}>
			<LoginForm />
		</div>
	);
};

export default LoginPage;
