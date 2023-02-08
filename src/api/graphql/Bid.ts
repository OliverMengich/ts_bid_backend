import { extendType, floatArg, idArg, list, mutationField, nonNull, objectType, queryType, subscriptionField } from "nexus";
import { Product } from "./Product";
import { PubSub } from "graphql-subscriptions";
import { Auction } from "./Auction";
import DBClient from "../database/DBClient";
import { Model } from "sequelize";
import Bids from "../database/models/bid.model";
new DBClient(Bids);
const pubSub = new PubSub();
export const Bid = objectType({
    name: "Bid",
    definition(t) {
        t.nonNull.id("id");
        t.nonNull.string("user");
        t.nonNull.field('product',{
            type: Product
        })
        t.nonNull.field('auction',{
            type: Auction
        })
        t.nonNull.string("categories");
        t.nonNull.string("imageUrl");
        t.nonNull.id("bidder");
        t.nonNull.int("createdAt");
        t.nonNull.string("updatedAt")
    },
});
export const BidQuery = extendType({
    type: "Query",
    definition(t) {
        t.list.field("bids",{
            type: Bid,
            description: "Fetch a list of Bids",
            resolve(_,__,ctx){
                
            }
        })
        t.field("bid",{
            type: nonNull(Bid),
            description:"Retrieve a bid by id",
            resolve(_,__,ctx){}
        })
    },
});
export const BidMutation = extendType({
    type: "Mutation",
    definition: t =>{
        t.nonNull.field("placeABid",{
            type: Bid,
            args:{
                auctionId: nonNull(idArg()),
                price: nonNull(floatArg()),
                bidder: nonNull(idArg())
            },
            resolve(_,__,ctx){
                pubSub.publish("placeABid", {
                    data: {
                        id: "1",
                        user: "1",
                        product: "1",
                        bidPrice: 1.1,
                        bidTime: new Date(),
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                });
            }
        });
        t.nonNull.field("updateABid", {
            type: Bid,
            args: {
                bidId: nonNull(idArg()),
                price: nonNull(floatArg()),
                bidder: nonNull(idArg()),
            },
            resolve(_, __, ctx) {
                pubSub.publish("updateBid", {
                    data: {
                        id: "1",
                        user: "1",
                        product: "1",
                        bidPrice: 1.1,
                        bidTime: new Date(),
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    }
                });
            },
        });
        t.nonNull.field("deleteABid", {
            type: Bid,
            args: {
                bidId: nonNull(idArg()),
                bidder: nonNull(idArg()),
            },
            resolve(_, __, ctx) {
                pubSub.publish("deleteBid", {
                    data: {
                        id: "1",
                        user: "1",
                        product: "1",
                        bidPrice: 1.1,
                        bidTime: new Date(),
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    }
                });
            },
        });
    }

});
type UserT ={
    id: string
    name: string
    email: string
    phonenumber: string
}
type AuctionT = {}
type ProductT = {
    id: string
}
type Bid = {
    id: string
    user: UserT;
    auction: AuctionT;
    product: ProductT;
    bidPrice: number;
    bidTime: Date;
    createdAt: Date;
    updatedAt: Date;
};
type Event<T> = {
    data: T
}

export const BidSubscription = extendType({
    type: "Subscription",
    definition: t => {
        t.field("placeABid", {
            type: Bid,
            subscribe() {
                return pubSub.asyncIterator("placeABid");
            },
            async resolve(eventPromise: Promise<Event<Bid>>) {
                const event = await eventPromise;
                return event.data;
            },
        });
        t.field("updateBid", {
            type: Bid,
            subscribe() {
                return pubSub.asyncIterator("updateBid");
            },
            async resolve(eventPromise: Promise<Event<Bid>>) {
                const event = await eventPromise;
                return event.data;
            },
        });
        t.field("deleteBid", {
            type: Bid,
            subscribe() {
                return pubSub.asyncIterator("deleteBid");
            },
            async resolve(eventPromise: Promise<Event<Bid>>) {
                const event = await eventPromise;
                return event.data;
            },
        });
    }
});