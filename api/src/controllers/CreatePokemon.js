const data = require("../utils.js");
const { Pokemon, Type, Types_pokemons } = require("../db");
var id = 40;

const createPokemon = async (info) => {
  id++;
  const poke = await Pokemon.create({
    id: id,
    name: info.name,
    height: info.height ? info.height : null,
    weight: info.weight ? info.weight : null,
    life: info.life ? info.life : null,
    attack: info.attack ? info.attack : null,
    defense: info.defense ? info.defense : null,
    speed: info.speed ? info.speed : null,
    image: info.image ? info.image : null,
  });

  info.types?.map(async (e) => {
    const t = await Types_pokemons.create({
      pokemon: poke.id,
      type: e,
    });
  });

  const archivo = poke.toJSON();

  const obj = {
    ...archivo,
    types: changeToName(info.types),
    db: true,
  };
  data.pokemonsLocal.push(obj);

  return obj;
};

const changeToName = (types) => {
  const nameTypes = types.map((e) => {
    const tipo = data.types.find((x) => x.id === parseInt(e));
    return tipo.name;
  });
  return nameTypes;
};

module.exports = { createPokemon };
