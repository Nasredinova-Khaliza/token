import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// interface Product {
// 	id: number;
// 	productName: string;
// 	photoUrl: string;
// 	price: number;
// 	quantity: number;
// }
interface Product {
	id: number;
	productName: string;
	quantity: number;
	price: number;
	photoUrl: string;
}

export const productstApi = createApi({
	reducerPath: "productApi",
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_REQUEST_URL,
		prepareHeaders: (headers) => {
			// You can dynamically set authorization headers here
			const token = localStorage.getItem("token");
			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
			}
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getProducts: builder.query<Product[], void>({
			query: () => "products",
		}),
		postProduct: builder.mutation<Product, Product>({
			query: (newData) => ({
				url: "products",
				method: "POST",
				body: newData,
			}),
		}),
		// deleteProduct: builder.mutation<void, number>({
		//   query: (id) => `${id}`,
		//   method: "DELETE",
		// }),
	}),
});

export const {
	useGetProductsQuery,
	usePostProductMutation,
	// useDeleteProductMutation,
} = productstApi;
