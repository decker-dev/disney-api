import Sequelize from "sequelize";
import userModel from "./models/user";
import characterModel from "./models/character";

const sequelize = new Sequelize("disney", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

const Character = characterModel(sequelize, Sequelize);
const User = userModel(sequelize, Sequelize);

sequelize.sync({ forse: false }).then(() => {
  console.log("sync");
});
module.exports = { Character, User };
