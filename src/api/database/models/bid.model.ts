import sequelize from "../db";
import { DataTypes, Optional, Model } from "sequelize";
import { ProductOutputs } from "./product.model";

interface BidAttributes{
  id: string;
  bidder: string;
  product: ProductOutputs;
  bidPrice: number;
  bidTime: Date;
}
export interface BidInputs extends Optional<BidAttributes,"id">{}
export interface BidOutputs extends Required<BidAttributes>{};

class Bids extends Model<BidAttributes,BidInputs> implements BidAttributes{
	public readonly id!: string;
	public bidder!: string;
	public product!: ProductOutputs;
	public bidPrice!: number;
	public bidTime!: Date;
}
Bids.init({
	id: {
		type: DataTypes.UUID,
		allowNull: false,
		primaryKey: true,
		defaultValue: DataTypes.UUIDV4
    },
    bidder: {
		type: DataTypes.UUID,
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
    }},
	{
		sequelize,
		paranoid: true,
		timestamps:true
	}
);
export default Bids;
