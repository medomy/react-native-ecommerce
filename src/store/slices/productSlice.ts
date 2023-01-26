import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product } from '../../types/product'
import { networkConfig } from '../../network/networkConfig'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: networkConfig.baseUrl }),
    endpoints: (builder) => ({
        getAllProductsCategory: builder.query<Product[], string>({
            query: (category) => `/products/${category}`,
        }),
        getAllProducts: builder.query<Product[], void>({
            query: () => `/products`
        }),
        getProductById: builder.query<Product, number>({
            query: (id) => `/products/${id}`
        }),
        getLimitedProducts: builder.query<Product[], number>({
            query: (limit) => `/products?limit=${limit}`
        }),
        getAllCategories: builder.query<string[], void>({
            query: () => `/products/categories`
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsCategoryQuery, useGetAllProductsQuery, useGetLimitedProductsQuery, useGetProductByIdQuery, useGetAllCategoriesQuery } = productsApi