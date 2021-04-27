module.exports= (sequelize, Datatypes) => {
  return sequelize.define(
    "Films",
    {
      id: {
        type: Datatypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      picture: {
        type: Datatypes.STRING,
      },
      title: {
        type: Datatypes.STRING,
      },
      creation_date: {
        type: Datatypes.STRING,
      },
      stars: {
        type: Datatypes.STRING,
      },
      genre: {
        type: Datatypes.STRING,
      }
    },
    {}
  );
};
