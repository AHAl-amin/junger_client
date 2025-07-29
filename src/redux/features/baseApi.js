import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'base-api-will-go-here' }),

    tagTypes: [],
    endpoints: (builder) => ({

        createUser: builder.mutation({
            query: (userData) => ({
                url: '/create-user',
                method: "POST",
                body: userData,
            })
        }),
    }),
});


export const { 

    useCreateUserMutation

 } = baseApi


