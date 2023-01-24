import { Model, Optional } from "sequelize";
import AuctionModel from "./models/auction.model";


export default class DBClient{
    private model: Model;
    constructor(model: Model){
        this.model = model;
    }
    create(data:string) {
        
    }
} 
let dbClient = new DBClient(AuctionModel);