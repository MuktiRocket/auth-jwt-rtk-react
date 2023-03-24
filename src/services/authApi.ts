import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005",
        mode: "cors"
    }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (body: { email: string, password: string }) => {
                return {
                    url: "/api/user/login",
                    method: "post",
                    body,
                };
            },
        }),
        registerUser: builder.mutation({
            query: (body: { firstName: string, lastName: string, email: string, password: string }) => {
                return {
                    url: "/api/user/register",
                    method: "post",
                    body,
                };
            },
        })
    }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;