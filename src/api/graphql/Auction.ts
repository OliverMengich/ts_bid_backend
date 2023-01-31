import { idArg, mutationField, nonNull, objectType, queryType, booleanArg, list, stringArg, subscriptionField, extendType } from "nexus";
import { Product } from "./Product";
import { Bid } from "./Bid";
import { User } from "./User";
import { PubSub } from "graphql-subscriptions";
const pubSub = new PubSub();

export const Auction = objectType({
    name: "Auction",
    definition(t) {
        t.nonNull.id("id")
        t.nonNull.field("product",{
            type: Product
        })
        t.list.nonNull.field("bids",{
            type: Bid
        })
        t.nonNull.boolean("auctionStatus")
        t.nonNull.field("auctionWinner",{
            type: User
        })
        t.nonNull.string("auctionStartTime");
        t.nonNull.string("auctionEndTime");
        t.nonNull.string("auctionStartPrice");
        t.nonNull.string("auctionUpdatedPrice")
        t.nonNull.string("auctionIncrementTime");
        t.nonNull.string("createdAt");
        t.nonNull.string("updatedAt");
    },
});
export const AuctionQuery = extendType({
    type: "Query",
    definition(t) {
        t.list.field("auctions",{
            type: Auction,
            description: "Fetch a list of Auctions",
            async resolve(_,__,ctx){
                console.log("ctx.db",ctx.db);
                
                await ctx.db.Auctions.findAll();
            }
        })
        t.field("auction",{
            type: Auction,
            // description:"Retrieve an auction by id",
            resolve(_,__,ctx){

            }
        })
    }
});
export const AuctionMutation = extendType({
    type: "Mutation",
    definition: t =>{
        t.nonNull.field("createAuction",{
            type: Auction,
            args:{
                productId: nonNull(idArg()),
                auctionStatus: nonNull(booleanArg()),
                auctionWinner: nonNull(idArg()),
                auctionStartTime: nonNull(stringArg()),
                auctionEndTime: nonNull(stringArg()),
                auctionStartPrice: nonNull(stringArg()),
                auctionUpdatedPrice: nonNull(stringArg()),
                auctionIncrementTime: nonNull(stringArg()),
            },
            resolve(_,__,ctx){
                pubSub.publish("createAuction", {
                    data: {
                        id: "1",
                        product: "1",
                        auctionStatus: true,
                        auctionWinner: "1",
                        auctionStartTime: new Date(),
                        auctionEndTime: new Date(),
                        auctionStartPrice: 1.1,
                        auctionUpdatedPrice: 1.1,
                        auctionIncrementTime: 1.1,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                });
            }
        });
        t.nonNull.field("updateAuction", {
            type: Auction,
            args: {
                auctionId: nonNull(idArg()),
                auctionStatus: nonNull(booleanArg()),
                auctionWinner: nonNull(idArg()),
                auctionStartTime: nonNull(stringArg()),
                auctionEndTime: nonNull(stringArg()),
                auctionStartPrice: nonNull(stringArg()),
                auctionUpdatedPrice: nonNull(stringArg()),
                auctionIncrementTime: nonNull(stringArg()),
            },
            resolve(_,__,ctx){
                pubSub.publish("updateAuction", {
                    data: {
                        id: "1",
                        product: "1",
                        auctionStatus: true,
                        auctionWinner: "1",
                        auctionStartTime: new Date(),
                        auctionEndTime: new Date(),
                        auctionStartPrice: 1.1,
                        auctionUpdatedPrice: 1.1,
                        auctionIncrementTime: 1.1,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                });
            }
        });
        t.nonNull.field("deleteAuction", {
            type: Auction,
            args: {
                auctionId: nonNull(idArg()),
            },
            resolve(_,__,ctx){
                pubSub.publish("deleteAuction", {
                    data: {
                        id: "1",
                        product: "1",
                        auctionStatus: true,
                        auctionWinner: "1",
                        auctionStartTime: new Date(),
                        auctionEndTime: new Date(),
                        auctionStartPrice: 1.1,
                        auctionUpdatedPrice: 1.1,
                        auctionIncrementTime: 1.1,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                });
            }
        });
    }
});
type UserX = {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
}
type ProductX={
    id: string;
    title: string;
    description: string;
    price: number;
}
type BidX={
    id: string;
    user: UserX;
    bidPrice: string;
    bidTime: string;
}
type Event<T> = {
    data: T;
}
type Auction={
    id: string;
    product: ProductX;
    bids: BidX[];
    auctionStatus: boolean;
    auctionWinner: string;
    auctionStartTime: string;
    auctionEndTime: string;
    auctionStartPrice: string;
    auctionUpdatedPrice: string;
    auctionIncrementTime: string;
}
export const AuctionSubscription = extendType({
    type: "Subscription",
    definition(t) {
        t.nonNull.field("createAuction",{
            type: Auction,
            subscribe(_,__,ctx){
                return pubSub.asyncIterator("createAuction");
            },
            async resolve(eventPromise: Promise<Event<Auction>>){
                const payload = await eventPromise;
                return payload.data;
            }
        });
        t.nonNull.field("updateAuction", {
            type: Auction,
            subscribe(_, __, ctx) {
                return pubSub.asyncIterator("updateAuction");
            },
            async resolve(eventPromise: Promise<Event<Auction>>) {
                const payload = await eventPromise;
                return payload.data;
            },
        });
        t.nonNull.field("deleteAuction", {
            type: Auction,
            subscribe(_, __, ctx) {
                return pubSub.asyncIterator("deleteAuction");
            },
            async resolve(eventPromise: Promise<Event<Auction>>) {
                const payload = await eventPromise;
                return payload.data;
            },
        });
    }
})
