import { Model } from "sequelize";
import AuctionModel from "./models/auction.model";
import Bid from "./models/bid.model";
import { Mode } from "fs";
interface ModelData{
    id: string;
    name: string;
}
class BIDCRUD{
    public async create<TModel extends AuctionModel>(value: ModelData, Model: TModel): Promise<ModelData>{
        
        return await value;
    }
    public async read(data: TData){
        return data;
    }
    public async update(data: TData){
        return data;
    }
    public async delete(data: TData){
        return data;
    }
}