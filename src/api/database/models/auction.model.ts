import sequelize from "../db";
import { DataTypes, Optional,Model } from "sequelize";
interface AuctionAttributes {
	id: string;
	// product: string;
	// bids: string;
	auctionStatus: boolean;
	creator: string;
	auctionWinner: string;
	auctionStartPrice: number;
	auctionStartTime: string;
	auctionEndTime: string;
	createdAt?: Date;
	updatedAt?: Date;
}
export interface AuctionInputs extends Optional<AuctionAttributes, "id" | "auctionWinner"> {}
export interface IngredientOutputs extends Required<AuctionAttributes> {}
class AuctionModel extends Model<AuctionAttributes, AuctionInputs> implements AuctionAttributes {
	public readonly id!: string;
	public product!: string;
	public bids!: string;
	public auctionStatus!: boolean;
	public creator!: string;
	public auctionWinner!: string;
	public auctionStartPrice!: number;
	public auctionStartTime!: string;
	public auctionEndTime!: string;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}
AuctionModel.init({
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
		defaultValue: DataTypes.UUIDV4
    },
    // product: {
    //     type: DataTypes.UUID,
    //     allowNull: false,
    //     references: {
    //         model: "Products",
    //         key: "id",
    //     },
    // },
    // bids: {
    //     type: DataTypes.STRING,
    //     references: {
    //         model: "Bids",
    //         key: "id",
    //     },
    //     allowNull: false,
    // },
	auctionStatus: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
    },
    creator: {
		type: DataTypes.UUID,
		allowNull: false,
		references: {
			model: "Users",
			key: "id",
		},
    },
    auctionWinner: {
		type: DataTypes.UUID,
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
  },
  {
    timestamps: true,
	paranoid: true,
	sequelize
  });

export default AuctionModel;