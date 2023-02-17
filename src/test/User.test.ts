import { createTestContext } from "./__helpers"
const ctx = createTestContext();
describe('Testing',()=>{
    it('should be ok',()=>{
        expect(1).toBe(1)
    })
    it('should get all users',async()=>{
        const users = await ctx.graphqlClient.request(`
            query{
                users{
                    id
                    name
                    email
                }
            }
        `)
        expect(users.users.length).toBe(0);
    })
    it('should create a user',async()=>{
        const user = await ctx.graphqlClient.request(`
            mutation{
                createUser($email: String!, $name: String!, $password: String!, $phoneNumber: String!){
                    id
                    name
                    email
                }
            }
        `,{email:'testemail@gmail.com',name:'testname',password:'testpassword',phoneNumber:'0123456789'})
        expect(user).toMatchObject<{id: string,name: string,email: string}>({
            id: expect.any(String),
            name: 'testname',
            email: 'testemail@gmail.com',
        })
    })
})