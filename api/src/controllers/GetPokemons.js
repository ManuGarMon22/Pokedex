const data = require("../utils");
const { Pokemon, Type } = require("../db");
const axios = require("axios").default;

const getPokemonsApi = () => {
  //funcional
  for (let i = 1; i <= 10; i++) {
    axios
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
  let s = archivoJson.map((p) =>
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
      image: p.imge,
      db: false,
    })
  );
  return data.pokemonsLocal;
};

const getAll = async () => {
  let all = await data.pokemonsLocal.concat(data.pokemonsAPI);
  return all;
};

const getAllSort = async (attri) => {
  //funciona
  let all = await getAll();
  let sorted = all.sort((a, b) => compareFn(a, b, attri));
  return sorted;
};

function compareFn(a, b, attri) {
  const nameA = a[attri];
  const nameB = b[attri];
  if (attri === "name") {
    return nameA.toUpperCase() < nameB.toUpperCase()
      ? -1
      : nameA.toUpperCase() > nameB.toUpperCase()
      ? 1
      : 0;
  } else {
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
  }
}

const getByNameApi = async (name) => {
  try {
    return await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
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
          image: p.sprites.front_default ? p.sprites.front_default : null,
          db: false,
        };
        return poke;
      })
      .catch((e) => {});
  } catch (error) {
    throw new Error(
      "error en la api para obtener el pokemon, verifique el nombre"
    );
  }
};

const getByName = async (name) => {
  let list = await getAll();
  let aux = await list.find((x) => x.name.toUpperCase() === name.toUpperCase());

  if (!aux) {
    aux = await getByNameApi(name);
  }
  if (!aux) {
    throw new Error(
      `No existe el pokemon con el nombre '${name}' dentro de la base de datos ni la Api`
    );
  }
  return aux;
};

const getByID = async (id) => {
  let aux = await getAll().find((x) => x.id === parseInt(id));
  if (!aux)
    throw new Error(`No existe el id '${id}' dentro de la base de datos`);
  return aux;
};

module.exports = {
  // getPokemonsApi,
  // getPokemonsDB,
  getAll,
  getAllSort,
  getByName,
  getByID,
};
