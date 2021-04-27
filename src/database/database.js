import Sequelize from "sequelize";
import userModel from "./models/user";
import characterModel from "./models/character";
import filmModel from "./models/films";
require('dotenv').config()
//const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,{

const sequelize = new Sequelize(process.env.NAME_BD, process.env.USER_BD, process.env.PASS_BD, {
  
  host: process.env.DB_HOST,
  dialect: "mysql",
});

const Character = characterModel(sequelize, Sequelize);
const User = userModel(sequelize, Sequelize);
const Film =filmModel(sequelize, Sequelize);
sequelize.sync({ forse: false }).then(() => {
  console.log("sync");
});
module.exports = { Character, User,Film };
