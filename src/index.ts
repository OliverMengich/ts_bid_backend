import {startStandaloneServer} from '@apollo/server/standalone';
import sequelize from './api/database/db';
import { server } from './api/server';
import { context } from './api/context';
const url = startStandaloneServer(server,{
    context: async ()=>{
        console.log("Context was Initialized");
        return{
            db: context.db,
            auctionsdb: context.auctionsdb,
            user: null
        }
    }
});

url.then(({url})=>{
    console.log(`Server ready at ${url}`);
})