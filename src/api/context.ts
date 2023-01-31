import sequelize from "./database/db";
import DBClient from "./database/DBClient";
export const context = {
    db: new DBClient(sequelize.models.Auctions),
    // db: DBClient,
}