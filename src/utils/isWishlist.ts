import { Product } from "../types/product";

export function isWishlist(product: Product, wishlist: Product[]) {
    return wishlist.find((item) => item.id === product.id) !== undefined
}