import films from './films'
module.exports= (sequelize, Datatypes) => {

  const  character = sequelize.define(
    "characters",
    {
      id: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      picture: {
        type: Datatypes.STRING,
      },
      name: {
        type: Datatypes.STRING,
      },
      age: {
        type: Datatypes.STRING,
      },
      weight: {
        type: Datatypes.STRING,
      },
      history: {
        type: Datatypes.STRING,
      },
    },
    {}
  );
  return character
};
