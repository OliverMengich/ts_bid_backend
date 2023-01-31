import { Model, ModelStatic } from "sequelize";
// import sequelize from "./db";
import AuctionModel from './models/auction.model';
import sequelize from "./db";
type RepoErrorCode = 404 | 500;
class RepoError extends Error{
    public code: RepoErrorCode;
    
    constructor(message: string, code: RepoErrorCode) {
        super(message);
        this.code = code;
    }
}
export type AucRes<M> = Promise<Result<M | undefined, RepoError| undefined>>;
class Result<V,E>{
    public isSuccess: boolean;
    public isFailure: boolean;
    private error: E;
    private value: V;
    constructor(isSuccess: boolean, value: V, error: E){
        this.isSuccess= isSuccess;
        this.isFailure = !isSuccess;
        this.value = value;
        this.error = error;
        if (isSuccess && error) {
            throw new Error("Error found")
        }else if (!isSuccess && value) {
            throw new Error("Unsuccessfule")
        }
    }
    public static ok<V>(value: V): Result<V,undefined>{
        return new Result(true,value,undefined)
    }
    public static fail<E>(error: E): Result<undefined, E>{
        return new Result(false,undefined, error)
    }
    public getError():E{
        if (this.isSuccess) {
            throw new Error("Success result has no Error")
        }
        return this.error
    }
    public getValue():V{
        if (this.isFailure) {
            throw new Error("Unsuccessfull eror dont contain value")
        }
        return this.value;
    }
}
interface IAuction<M>{
    save(model: M): AucRes<M>;
    findById(id: string): AucRes<M>;
    findAll(): AucRes<M[]>;
}
export default class DBClient<M extends Model> implements IAuction<M> {
    private Model!: ModelStatic<M>;
    constructor(Model: ModelStatic<M>){
        this.Model = Model;
        sequelize.sync()
    }
    public async save(doc: M): AucRes<M> {
        try {
            const savedDoc = await doc.save();
            return Result.ok(savedDoc);
        } catch (ex: any) {
            return Result.fail(new RepoError(ex.message,500))
        }
    }
    public async findById(id: string): AucRes<M> {
        try {
            const doc =await this.Model.findByPk(id)
            if (!doc) {
               return Result.fail(new RepoError(' Not found',404)) 
            }
            return Result.ok(doc);
        } catch (err: any) {
            return Result.fail(new RepoError('Not found',404))
        }
    }
    public async findAll(): AucRes<M[]> {
        try {
            const docs = await this.Model.findAll();
            return Result.ok(docs)
        } catch (error: any) {
            return Result.fail(new RepoError(error.message,500))
        }
    }
}
