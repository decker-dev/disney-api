"use strict";

module.exports = (sequelize, Datatypes) => {
  return sequelize.define('user', {
    id: {
      type: Datatypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: Datatypes.STRING
    },
    password: {
      type: Datatypes.STRING(150)
    }
  }, {
    timestamps: false
  });
};