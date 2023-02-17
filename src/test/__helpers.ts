import { PrismaClient } from "@prisma/client";
import { server } from "../api/server";
import { GraphQLClient } from "graphql-request";
import { join } from "path";
import { execSync } from "child_process";
import { startStandaloneServer } from "@apollo/server/standalone";
import { context } from "../api/context";
// import { before } from "node:test";
type TestContext = {
    prisma: PrismaClient;
    graphqlClient: GraphQLClient;
};
export function createTestContext(): TestContext {
    const prismaCtx = prismaTestContext();
    let ctx = {} as TestContext;
    const graphqlCtx = graphQLTestContext();
    beforeAll(async () => {
        ctx.prisma = await prismaCtx.before();
        ctx.graphqlClient = await graphqlCtx.before();
    });
    afterAll(async () => {
        await prismaCtx.after();
        await graphqlCtx.after();
    });
    return ctx;
}
function graphQLTestContext() {
    return {
        async before() {
            return new GraphQLClient("http://localhost:4000/graphql", {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        },
        async after() {
            // await prismaClient.$disconnect();
        }
    }
}
function prismaTestContext(){
    let prismaClient: null | PrismaClient = null;
    return{
        async before(){
            await execSync("npx prisma migrate reset --force");
            prismaClient = new PrismaClient();
            return prismaClient;
        },
        async after() {
            if (prismaClient) {
                await prismaClient.$disconnect();
            }
        }
    }
}