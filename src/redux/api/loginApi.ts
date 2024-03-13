import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface LoginRequest {
	email: string;
	password: string;
}
interface LoginResponse {
	token: string;
}

export const loginApi = createApi({
	reducerPath: "loginApi ",
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_REQUEST_URL }),
	endpoints: (builder) => {
		return {
			login: builder.mutation<LoginResponse, LoginRequest>({
				query: (body) => ({
					url: "login",
					method: "POST",
					body,
				}),
			}),
		};
	},
});

export const { useLoginMutation } = loginApi;
