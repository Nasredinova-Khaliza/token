import { FC } from "react";
import RegisterForm from "../../forms/registerForm/RegisterForm";

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
	return (
		<div>
			<RegisterForm />
		</div>
	);
};

export default Register;
