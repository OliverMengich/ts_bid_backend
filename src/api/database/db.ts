import { Sequelize } from "sequelize";
const sequelize = new Sequelize('postgresql://postgres:Oliver8677@localhost:5432/development_db',{
    host: 'localhost',
    dialect: "postgres",
    logging: false
});
const authenticate =async() => {   
    await sequelize.authenticate().then(()=>console.log("Connected to DB"))
}
authenticate();
export default sequelize;