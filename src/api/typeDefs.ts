import { Auctions, Product, User } from "@prisma/client";

enum CategoryEnum{
    Electronics,
    Groceries,
    Animals,
    Fashion,
    Home,
    Sports,
    Books,
    Other
}
export interface ProductX {
    id: string;
    title: string;
    category: CategoryEnum;
    imageUri: string;
    price: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export type BidVals={
    id: string
    product: Product
    auction: Auctions
    bidder: User
    bidTime: Date
    createdAt: Date
    updatedAt: Date
}
export interface ProductInput {
    title: string;
    category: CategoryEnum;
    UserId: string;
    imageUrl: string;
    price: number;
}
