import { Sequelize } from "sequelize";
const sequelize = new Sequelize('postgresql://postgres:Oliver8677@localhost:5432/development_db',{
    host: 'localhost',
    dialect: "postgres",
    logging: false
});
const authenticate =async() => {   
    await sequelize.authenticate().then(async()=>{
        await sequelize.sync().then(res=>{
            console.log("Connected to the database");
        })
    }).catch(err=>{
        console.error(err);
    })
}
authenticate();
export default sequelize;