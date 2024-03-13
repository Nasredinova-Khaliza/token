import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Users {
	id: number;
	email: string;
}
interface CreateUserRequest {
	email: string;
	password: string;
	userName: string;
}

interface CreateUserResponse {
	id: number;
	userName: string;
	email: string;
	password: string;
}
export const usersApi = createApi({
	reducerPath: "usersApi ",
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_REQUEST_URL }),
	endpoints: (builder) => {
		return {
			getUsers: builder.query<Users[], void>({
				query: () => "users",
			}),
			createUser: builder.mutation<CreateUserResponse, CreateUserRequest>({
				query: (body) => ({
					url: "users",
					method: "POST",
					body,
				}),
			}),
		};
	},
});

export const { useGetUsersQuery, useCreateUserMutation } = usersApi;
