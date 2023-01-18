import {objectType, interfaceType, nonNull, enumType, queryType, intArg, mutationField, stringArg, arg, floatArg, idArg, list} from "nexus";
const CategoryEnum = enumType({
    name: "CategoryEnum",
    members: ["Electronics","Groceries","Animals"]
});
export const Product = objectType({
    name: "Product",
    definition(t){
        t.nonNull.id("id");
        t.nonNull.string("title")
        t.nonNull.float("price");
        t.nonNull.string("categories");
        t.nonNull.string("imageUrl");
    }
});
export const ProductQuery = queryType({
    definition(t) {
        t.list.field("products",{
            type: list(Product),
            resolve(_,__,ctx){
                
            }
        })
        t.list.field("product",{
            type: Product,
            args: {
                id: nonNull(intArg())
            },
            resolve(_,__,ctx){

            }
        })
    },
});
export const ProductMutation = mutationField((t)=>{
    t.nonNull.field('createProduct',{
        type: Product,
        args: {
            title: nonNull(stringArg()),
            category: arg({type: CategoryEnum}),
            UserId: arg({type: "id",default: "" }),
            imageUrl: nonNull(stringArg()),
            price: nonNull(floatArg()),
        },
        resolve(_,__,ctx){}
    })
    t.nonNull.field("updateProduct", {
        type: Product,
        args: {
            id: nonNull(idArg()),
            title: nonNull(stringArg()),
            category: arg({ type: CategoryEnum }),
            UserId: arg({ type: "id", default: "" }),
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
}) 