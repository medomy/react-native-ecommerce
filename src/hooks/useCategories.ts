import { useGetAllCategoriesQuery } from "../store/slices/productSlice";

export function useCategories() {
    const { data , isLoading , error} = useGetAllCategoriesQuery();
    const categories = ['All' , ...data!];
    return { categories, isLoading , error }
}