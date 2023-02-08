import {objectType, interfaceType, nonNull, enumType, intArg, mutationField, stringArg, arg, floatArg, idArg, list, extendType} from "nexus";
import { ProductX  }  from "../typeDefs";
const CategoryEnum = enumType({
    name: "CategoryEnum",
    members: ["Electronics","Fashion","Home","Sports","Books","Groceries","Animals","Other"]
});
export const Product = objectType({
    name: "Product",
    definition(t){
        t.nonNull.id("id");
        t.nonNull.string("title")
        t.nonNull.float("price");
        t.nonNull.string("category");
        t.nonNull.list.string("imageUri");
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
                const product = await ctx.db.product.findMany();
                console.log(product);
                return product;
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
                imageUri: nonNull(stringArg()),
                price: nonNull(floatArg()),
            },
            async resolve(_, _args, ctx) {
                const newProd: ProductX = await ctx.db.product.create({
                    data:{..._args}
                })
                console.log(newProd);
                return newProd;
            },
        });
        t.nonNull.field("updateProduct", {
            type: Product,
            args: {
                id: nonNull(idArg()),
                title: nonNull(stringArg()),
                category: arg({ type: CategoryEnum }),
                owner: arg({type: "String"}),
                imageUri: nonNull(stringArg()),
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