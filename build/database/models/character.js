"use strict";

var _films = _interopRequireDefault(require("./films"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (sequelize, Datatypes) => {
  var character = sequelize.define("characters", {
    id: {
      type: Datatypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    picture: {
      type: Datatypes.STRING
    },
    name: {
      type: Datatypes.STRING
    },
    age: {
      type: Datatypes.STRING
    },
    weight: {
      type: Datatypes.STRING
    },
    history: {
      type: Datatypes.STRING
    }
  }, {});
  return character;
};