import sequelize from "../db";
import { DataTypes,Model,Optional } from "sequelize";
enum ProductCategoryEnum{
    "Electronics",
    "Groceries",
    "Animals"
}
interface ProductAttributes{
	id: string
	title: string;
	price: number;
	category: ProductCategoryEnum;
	imageUrl: string | string[]
}
export interface ProductInputs extends Optional<ProductAttributes, "id">{}
export interface ProductOutputs extends Required<ProductAttributes>{}
class Products extends Model<ProductAttributes, ProductInputs> implements ProductAttributes{
	public readonly id!: string;
	public title!: string;
	public price!: number;
	public category!: ProductCategoryEnum;
	public imageUrl!: string | string[];
}
Products.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true,
	sequelize,
	paranoid: true
  }
);
export default Products;