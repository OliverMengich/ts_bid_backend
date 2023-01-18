import sequelize from "../db";
import { DataTypes } from "sequelize";
const Bid = sequelize.define(
  "Bids",
  {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    bidder: {
      type: DataTypes.UUIDV4,
      references: {
        model: "Users",
        key: "id",
      },
      allowNull: false,
      unique: true,
    },
    product: {
      type: DataTypes.UUID,
      references: {
        model: "Products",
        key: "id",
      },
      allowNull: false,
    },
    bidPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
      unique: true,
    },
    bidTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
export default Bid;