export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

export interface CartItemType extends Product {
    quantity: number;
}