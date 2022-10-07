const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "types_pokemons",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pokemon: {
        type: DataTypes.INTEGER,
      },
      type: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
};
