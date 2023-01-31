import { Sequelize } from "sequelize";
const sequelize = new Sequelize('postgresql://postgres:Oliver8677@localhost:5432/bidding_db');
const authenticate =async() => {   
    await sequelize.authenticate().then((res) => {
        console.log("Connected to the database");
    });
}
authenticate();
export default sequelize;