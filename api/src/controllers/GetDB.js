const { Pokemon, Type, Types_pokemons } = require("../db");
const data = require("../utils");
const axios = require("axios").default;

const AddTypesToDB = async () => {
  await axios
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

  return "done";
};

const getPokemonsApi = async () => {
  //funcional
  for (let i = 1; i <= 20; i++) {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((doc) => doc.data)
      .then((p) => {
        let poke = {
          id: p.id,
          name: p.name,
          height: p.height,
          weight: p.weight,
          life: p.stats[0].base_stat,
          attack: p.stats[1].base_stat,
          defense: p.stats[2].base_stat,
          speed: p.stats[5].base_stat,
          types: p.types.map((d) => d.type.name),
          image: p.sprites.front_default,
          db: false,
        };
        data.pokemonsAPI.push(poke);
      })
      .catch((e) => {
        throw new Error("error en la api para obtener los pokemons");
      });
  }

  return data.pokemonsAPI;
};

const getPokemonsDB = async () => {
  const p = await Pokemon.findAll({ include: [Type] });
  let archivoJson = p.map((e) => e.toJSON());
  let s = archivoJson.map((p) => {
    data.pokemonsLocal.push({
      id: p.id,
      name: p.name,
      height: p.height,
      weight: p.weight,
      life: p.life,
      attack: p.attack,
      defense: p.defense,
      speed: p.speed,
      types: p.types.map((d) => d.name),
      image: p.image,
      db: false,
    });
  });
  return data.pokemonsLocal;
};

const getTypesDB = async () => {
  const tipos = await Type.findAll();
  let archivo = tipos.map((e) => e.toJSON());
  data.types = archivo;
  return data.types;
};

module.exports = {
  AddTypesToDB,
  getTypesDB,
  // getTypes,
  getPokemonsApi,
  getPokemonsDB,
};
