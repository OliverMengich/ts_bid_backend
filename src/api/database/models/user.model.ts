// import sequelize from "../db";
// import { DataTypes, Model, Optional } from "sequelize";
// interface UserAttributes{
//     id: string;
//     email: string;
//     password: string;
//     name: string;
// }
// export interface UserInputs extends Optional<UserAttributes, "id">{}
// export interface UserOutputs extends Required<UserAttributes>{}
// class Users extends Model<UserAttributes, UserInputs>implements UserAttributes{
//     public id!: string;
//     public email!: string;
//     public password!: string;
//     public name!: string;
// }
// Users.init({
//         id: {
//             type: DataTypes.UUID,
//             allowNull: false,
//             primaryKey: true,
//             defaultValue: DataTypes.UUIDV4,
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//         },
//         password: {
//             type: DataTypes.STRING(64),
//             allowNull: false,
//         },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//         },
//     },
//     { timestamps: true, sequelize }
// );

// export default Users;