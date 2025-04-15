export interface Category {
    name: string,
    image: string,
    products: Product[]
}

export interface Product {
    item: string,
    price: number,
    image: string,
    category: string
}