import { FC } from "react";
import RegisterForm from "../../forms/registerForm/RegisterForm";
import styles from "./Registration.module.scss";

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
	return (
		<div className={styles.RegisterPage}>
			<RegisterForm />
		</div>
	);
};

export default Register;
