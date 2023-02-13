import {objectType, interfaceType, nonNull, enumType, intArg, mutationField, stringArg, arg, floatArg, idArg, list, extendType} from "nexus";
import { ProductX  }  from "../typeDefs";
const CategoryEnum = enumType({
    name: 'CategoryEnum',
    members: ['Electronics','Fashion','Home','Sports','Books','Groceries','Animals','Other'],
    description: "Category of products in my Products table"
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
                const products: ProductX[] | unknown = await ctx.db.product.findMany();
                console.log(products);
                return products;
            }
        })
        t.field("product",{
            type: nonNull(Product),
            args: {
                id: nonNull(stringArg())
            },
            async resolve(_,_args,ctx){
                const product: ProductX | unknown = await ctx.db.product.findUnique({
                    where:{
                        id: _args.id
                    },
                    
                });
                if (!product) {
                    return null;
                }
                console.log("product found is: ",product);
                return product;
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
                imageUri: nonNull(list(stringArg())),
                price: nonNull(floatArg()),
            },
            async resolve(_, _args, ctx) {
                const newProd = await ctx.db.product.create({
                    data:{..._args}
                })
                console.log(newProd);
                return newProd;
            },
        });
        t.nonNull.field("updateProduct", {
            type: Product,
            args: {
                id: (idArg()),
                title: (stringArg()),
                category: arg({ type: CategoryEnum }),
                owner: arg({type: "String"}),
                imageUri: (list(stringArg())),
                price: (floatArg()),
            },
            async resolve(_,_args,ctx){
                const updatedData = await ctx.db.product.update({
                    where:{
                        id: _args.id
                    },
                    data:{
                        ..._args
                    }
                });
                return updatedData;
            }
        });
        t.field("deleteProduct", {
            type: Product,
            args: {
                id: nonNull(idArg()),
            },
            async resolve(_,_args,ctx){
                const product = await ctx.db.product.findUnique({
                    where:{
                        id: _args.id
                    }
                })
                if (!product) {
                    return;
                }
                return await ctx.db.product.delete({
                    where:{
                        id: _args.id
                    }
                })
            }
        })
    }
}) 