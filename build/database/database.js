"use strict";

var _sequelize = _interopRequireDefault(require("sequelize"));

var _user = _interopRequireDefault(require("./models/user"));

var _character = _interopRequireDefault(require("./models/character"));

var _films = _interopRequireDefault(require("./models/films"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require('dotenv').config();

var sequelize = new _sequelize.default(process.env.NAME_BD, process.env.USER_BD, process.env.PASS_BD, {
  host: process.env.HOST_BD,
  port: process.env.DB_PORT,
  dialect: "mysql"
});
var Character = (0, _character.default)(sequelize, _sequelize.default);
var User = (0, _user.default)(sequelize, _sequelize.default);
var Film = (0, _films.default)(sequelize, _sequelize.default);
Film.belongsToMany(Character, {
  through: "character_film",
  foreignKey: "film_id"
});
Character.belongsToMany(Film, {
  through: "character_film",
  foreignKey: "character_id"
});
sequelize.sync({
  forse: false
}).then(() => {
  console.log("sync");
}).then( /*#__PURE__*/_asyncToGenerator(function* () {
  /*
  let film1=await  Film.create( {
  
    picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Avengers_Endgame_Logo_Black.svg/220px-Avengers_Endgame_Logo_Black.svg.png",
    title:"Avengers: Endgame",
    creation_date:"22 de abril de 2019",
    stars:"5",
    genre:"Acción",
    characters:[
      {
          picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg/220px-Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg",
          name:"Robert John Downey Jr",
          age:"56",
          weight:" 0",
          history:"es un actor, actor de voz, productor y cantante estadounidense. Inició su carrera como actor a temprana edad apareciendo en varios filmes dirigidos por su padre, Robert Downey Sr.",
      },
      {
          picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Karen_Gillan_%2834833524262%29_%28cropped%29.jpg/220px-Karen_Gillan_%2834833524262%29_%28cropped%29.jpg",
          name:"Karen Gillan",
          age:"33",
          weight:" 0",
          history:"es una actriz y modelo escocesa, conocida por interpretar el papel de Amy Pond en la serie de ciencia ficción británica Doctor Who",
      },
    
    ]
  },{
    include:"characters"
  })
  */
})).then(() => {//return sequelize.drop() // drop all tables in the db
});
module.exports = {
  Character,
  User,
  Film,
  sequelize
};