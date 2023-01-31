import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AuthUser } from '../../types/authUser'
import { networkConfig } from '../../network/networkConfig'
import { NormalUser } from '../../types/normalUser'


type AuthResponse = {
    token: string
}
// Define a service using a base URL and expected endpoints
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: networkConfig.baseUrl }),
    endpoints: (builder) => ({
        loginSite: builder.mutation<AuthResponse, Partial<AuthUser>>({
            query(user) {
                return {
                    url: "/auth/login",
                    method: "POST",
                    body: {
                        username: user.userName,
                        password: user.password
                    }
                }
            }
        }),
        getUserById: builder.query<NormalUser, number>({
            query: (id) => `/users/${id}`
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginSiteMutation, useGetUserByIdQuery } = authApi