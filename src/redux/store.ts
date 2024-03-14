import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./api/usersApi";
import { loginApi } from "./api/loginApi";
import { productstApi } from "./api/productApi";

const store = configureStore({
	reducer: {
		[usersApi.reducerPath]: usersApi.reducer,
		[loginApi.reducerPath]: loginApi.reducer,
		[productstApi.reducerPath]: productstApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			usersApi.middleware,
			loginApi.middleware,
			productstApi.middleware
		),
});

export default store;
