import {objectType, interfaceType, nonNull, enumType, intArg, mutationField, stringArg, arg, floatArg, idArg, list, extendType} from "nexus";
import DBClient from "../database/DBClient";
import Products from "../database/models/product.model";
import { context } from "../context";
const CategoryEnum = enumType({
    name: "CategoryEnum",
    members: ["Electronics","Groceries","Animals"]
});
context.db= new DBClient(Products)
export const Product = objectType({
    name: "Product",
    definition(t){
        t.nonNull.id("id");
        t.nonNull.string("title")
        t.nonNull.float("price");
        t.nonNull.string("category");
        t.nonNull.string("imageUrl");
        t.nonNull.id("owner");
    }
});
export const ProductQuery = extendType({
    type: "Query",
    definition(t) {
        t.list.field("products",{
            type: Product,
            description: "Fetch a list of products",
            async resolve(_,__,ctx){
                const product = await ctx.db.findAll();
                console.log(ctx.db);
                return product.value;
            }
        })
        t.field("product",{
            type: nonNull(Product),
            args: {
                id: nonNull(intArg())
            },
            resolve(_,__,ctx){

            }
        })
    },
});
export const ProductMutation = extendType({
    type: "Mutation",
    definition: t =>{
        t.nonNull.field("createProduct", {
            type: Product,
            args: {
                title: nonNull(stringArg()),
                category: arg({ type: CategoryEnum }),
                owner: arg({ type: "String" }),
                imageUrl: nonNull(stringArg()),
                price: nonNull(floatArg()),
            },
            resolve(_, __, ctx) {},
        });
        t.nonNull.field("updateProduct", {
            type: Product,
            args: {
                id: nonNull(idArg()),
                title: nonNull(stringArg()),
                category: arg({ type: CategoryEnum }),
                owner: arg({type: "String"}),
                imageUrl: nonNull(stringArg()),
                price: nonNull(floatArg()),
            },
            resolve(_,__,ctx){}
        });
        t.nonNull.field("deleteProduct", {
            type: Product,
            args: {
                id: nonNull(idArg()),
            },
            resolve(_,__,ctx){
    
            }
        })
    }
}) 