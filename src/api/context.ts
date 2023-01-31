import { Model } from "sequelize";
import sequelize from "./database/db";
import DBClient from "./database/DBClient";
import AuctionModel from "./database/models/auction.model";
export const context = {
    // db: new DBClient<Model>(AuctionModel),
    db: DBClient,
}