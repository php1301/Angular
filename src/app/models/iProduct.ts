export interface Iproduct {
    id: number, name: string, image: string, description: string, price: number, invetory: number, rating: number
}
export interface IproductCart {
    product: Iproduct,
    quanity: number
}