import { Product } from "../types/product";

export function filterProducts(category: string, products: Product[]) {
    if (category === "All") return products;
    else return products.filter((product) => product.category === category);
}