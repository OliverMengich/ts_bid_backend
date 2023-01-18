import sequelize from "../db";
import { DataTypes } from "sequelize";
const Auction = sequelize.define("Auctions",{
    id: {
		type: DataTypes.UUIDV4,
		allowNull: false,
		primaryKey: true,
    },
    product: {
		type: DataTypes.UUIDV4,
		allowNull: false,
		references: {
			model: "Products",
			key: "id",
		},
    },
    bids: {
		type: DataTypes.STRING,
		references: {
			model: "Bids",
			key: "id",
		},
		allowNull: false,
    },
    auctionStatus: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
    },
    creator: {
		type: DataTypes.UUIDV1,
		allowNull: false,
		references: {
			model: "Users",
			key: "id",
		},
    },
    auctionWinner: {
		type: DataTypes.UUIDV1,
		allowNull: false,
    },
    auctionStartTime: {
		type: DataTypes.TIME,
		allowNull: false,
    },
    auctionEndTime: {
		type: DataTypes.FLOAT,
		allowNull: false,
    },
    auctionStartPrice: {
		type: DataTypes.FLOAT,
		allowNull: false,
    },
    auctionCurrentPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    auctionIncrement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    auctionIncrementTime: {
      type: DataTypes.TIME,
      defaultValue: "",
      allowNull: false,
    },
    auctionIncrementPrice: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
export default Auction;