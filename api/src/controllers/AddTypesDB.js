const { Type } = require("../db");
const axios = require("axios").default;

const AddToDB = () => {
  axios
    .get("https://pokeapi.co/api/v2/type")
    .then((doc) => doc.data)
    .then((r) => {
      r.results.map(async (t) => {
        let y = await Type.create({
          name: t.name,
        });
      });
    })
    .catch((e) => {
      throw new Error("Conection error with the types of pokemons ");
    });
};

module.exports = AddToDB;
