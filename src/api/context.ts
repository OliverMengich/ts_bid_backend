import DBClient from "./database/DBClient";
import AuctionModel from "./database/models/auction.model";
import Products from "./database/models/product.model";
export const context = {
    db: new DBClient(Products),
    auctionsdb: new DBClient(AuctionModel)
    // db:  DBClient,
}