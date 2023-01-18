import {startStandaloneServer} from '@apollo/server/standalone';
import { server } from './api/server';
const url = startStandaloneServer(server,{
    context: async ()=>({
        db: null,
        user: null
    })
});
url.then((url)=>{
    console.log(`Server ready at ${url}`);
})