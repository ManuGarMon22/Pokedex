const { Router } = require("express");
const getsPokemons = require("../controllers/GetPokemons.js");
const createPo = require("../controllers/CreatePokemon");
// const { Pokemon, Type } = require("../db");

const pokemons = Router();

pokemons.get("/", async (req, res) => {
  const { order, type, origin, descent } = req.query;
  const recibido = {
    order: order || null,
    type: type || null,
    origin: origin || null,
    descent: descent || null,
  };
  if (order || type || origin || descent) {
    try {
      var filt = await getsPokemons.getFiltered(recibido);
      res.status(200).send(filt);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  } else if (req.query.name) {
    try {
      let poke = await getsPokemons.getByName(req.query.name);
      res.status(200).send(poke);
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  } else {
    try {
      const all = await getsPokemons.getAll();
      res.status(200).send(all);
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  }
});

pokemons.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let r = await getsPokemons.getByID(id);
    res.status(200).send(r);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

pokemons.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    if (!name) {
      throw new Error("Un pokemon necesita de nombre para poder ser creado");
    } else {
      const r = await createPo.createPokemon(req.body);
      res.status(200).send({
        msg: "pokemon creado con exito",
        pokemon: r,
      });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

// pokemons.get("/order", async (req, res) => {

//     res.status(200).send(all);
//   } catch (error) {
//     res.status(400).send({ msg: error.message });
//   }
// });

module.exports = pokemons;
