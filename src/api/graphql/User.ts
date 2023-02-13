import {
    floatArg,
    idArg,
    list,
    mutationField,
    nonNull,
    objectType,
    queryType,
    stringArg,
    subscriptionField,
} from "nexus";
export const User = objectType({
    name: "User",
    definition(t) {
        t.nonNull.id("id");
        t.nonNull.string("name");
        t.nonNull.string("email");
        t.nonNull.string("phoneNumber");
        t.string("password");
        t.string("createdAt");
        t.string("updatedAt");
    }
});
export const UserQuery = queryType({
    definition(t) {
        t.list.field("users", {
            type: User,
            description: "Fetch a list of Users",
            async resolve(_, __, ctx) {
                const users = await ctx.db.user.findMany({
                    select: {password: false,id: true, email: true,name: true }
                });
                return users;
            }
        });
        t.field("user", {
            type: User,
            description: "Retrieve a user by id",
            args:{
                id: nonNull(idArg())
            },
            resolve(_,args,ctx) { 
                return ctx.db.user.findUnique({
                    where:{
                        id: args.id
                    }
                }).then((res: unknown)=>{
                    console.log(res);
                    return res;
                })
                .catch((err:unknown)=>err);
            }
        });
    }
});
export const UserMutation = mutationField((t) => {
    t.field("createUser", {
        type: User,
        args: {
            name: nonNull(stringArg()),
            email: nonNull(stringArg()),
            password: nonNull(stringArg()),
            phoneNumber: nonNull(stringArg())
        },
        async resolve(_, _args, ctx) {
            const users = await ctx.db.user.create({
                data: {..._args}
            })
            console.log(users);
            return users;
         }
    });
    t.nonNull.field("updateUser", {
        type: User,
        args: {
            id: nonNull(idArg()),
            name: stringArg(),
            email: stringArg(),
            password: stringArg(),
            phoneNumber: stringArg()
        },
        async resolve(_,args, ctx) {
            return await ctx.db.user.update({
                where:{id: args.id},
                data: {...args}
            })
        }
    });
    t.field("deleteUser", {
        type: User,
        args: {
            id: nonNull(idArg()),
        },
        async resolve(_, args, ctx) {
            const deleteUser = await ctx.db.user.findUnique({
                where: {id: args.id}
            });
            if (!deleteUser) {
                return;
            }
            return ctx.db.user.delete({
                where: {id: args.id}
            })
        }
    });
});