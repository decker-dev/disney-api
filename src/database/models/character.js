module.exports= (sequelize, Datatypes) => {
  return sequelize.define(
    "character",
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
      Filmography: {
        type: Datatypes.STRING,
      },
    },
    {}
  );
};
