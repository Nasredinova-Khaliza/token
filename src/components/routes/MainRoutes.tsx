import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/registration/Registration";
import Product from "../pages/product/Product";

const MainRoutes: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/product" element={<Product />} />
			</Routes>
		</BrowserRouter>
	);
};

export default MainRoutes;
