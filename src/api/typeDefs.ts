enum CategoryEnum{
    "Electronics",
    "Groceries",
    "Animals"
}
export interface Product {
    id: number;
    title: string;
    category: CategoryEnum;
    UserId: string;
    imageUrl: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}
export interface ProductInput {
    title: string;
    category: CategoryEnum;
    UserId: string;
    imageUrl: string;
    price: number;
}
