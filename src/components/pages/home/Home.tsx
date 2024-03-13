import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	useGetProductsQuery,
	usePostProductMutation,
} from "../../../redux/api/productApi";

import scss from "./Home.module.scss";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	const navigate = useNavigate();
	const [productName, setProductName] = useState("");
	const [photoUrl, setPhotoUrl] = useState("");
	const [price, setPrice] = useState<number>(0);
	const [quantity, setQuantity] = useState<number>(0);
	const { data: products = [], refetch } = useGetProductsQuery();
	const [postProduct] = usePostProductMutation();

	useEffect(() => {
		const isAuth = localStorage.getItem("isAuth");
		if (isAuth !== "true") {
			navigate("/login");
		}
	}, [navigate]);

	const logout = () => {
		navigate("/login");
		localStorage.removeItem("token");
		localStorage.removeItem("isAuth");
	};

	const handlePost = async () => {
		try {
			const newData = {
				productName,
				quantity,
				price,
				photoUrl,
			};
			await postProduct(newData);
			refetch();
		} catch (error) {
			console.error("Error while posting product:", error);
		}
	};

	return (
		<div className={scss.Home}>
			<button onClick={logout}>Log Out</button>
			<div className={scss.inputContainer}>
				<input
					type="text"
					placeholder="Product Name"
					value={productName}
					onChange={(e) => setProductName(e.target.value)}
				/>
			</div>
			<div className={scss.inputContainer}>
				<input
					type="text"
					placeholder="Photo"
					value={photoUrl}
					onChange={(e) => setPhotoUrl(e.target.value)}
				/>
			</div>
			<div className={scss.inputContainer}>
				<input
					type="number"
					placeholder="Price"
					value={price}
					onChange={(e) => setPrice(Number(e.target.value))}
				/>
			</div>
			<div className={scss.inputContainer}>
				<input
					type="number"
					placeholder="Quantity"
					value={quantity}
					onChange={(e) => setQuantity(Number(e.target.value))}
				/>
				<button onClick={handlePost}>Add</button>
			</div>

			{products.map((item) => (
				<div key={item.id} className={scss.card}>
					<h1>{item.productName}</h1>
					<img src={item.photoUrl} alt="" />
					<p>{item.price}</p>
					<p>{item.quantity}</p>
				</div>
			))}
		</div>
	);
};

export default Home;
