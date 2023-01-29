import { Product } from "./product";

export interface CartItem extends Product {
    count: number,
    userId: number,
    color?: string,
    size?: string
}