import {
    floatArg,
    idArg,
    list,
    mutationField,
    nonNull,
    objectType,
    queryType,
    subscriptionField,
} from "nexus";
export const User = objectType({
    name: "User",
    definition(t) {
        t.nonNull.id("id");
        t.nonNull.string("name");
        t.nonNull.string("email");
        t.nonNull.string("phoneNumber");
        t.nonNull.string("password");
        t.nonNull.string("createdAt");
        t.nonNull.string("updatedAt");
    }
});
export const UserQuery = queryType({
    definition(t) {
        t.list.field("users", {
            type: list(User),
            description: "Fetch a list of Users",
            resolve(_, __, ctx) { }
        });
        t.field("user", {
            type: User,
            description: "Retrieve a user by id",
            resolve(_, __, ctx) { }
        });
    }
});
export const UserMutation = mutationField((t) => {
    t.nonNull.field("createUser", {
        type: User,
        args: {
            name: nonNull(idArg()),
            email: nonNull(idArg()),
            password: nonNull(idArg()),
        },
        resolve(_, __, ctx) { }
    });
    t.nonNull.field("updateUser", {
        type: User,
        args: {
            id: nonNull(idArg()),
            name: nonNull(idArg()),
            email: nonNull(idArg()),
            password: nonNull(idArg()),
        },
        resolve(_, __, ctx) { }
    });
    t.nonNull.field("deleteUser", {
        type: User,
        args: {
            id: nonNull(idArg()),
        },
        resolve(_, __, ctx) { }
    });
});