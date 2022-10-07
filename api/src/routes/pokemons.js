const { Router } = require("express");
const getsPokemons = require("../controllers/GetPokemons.js");
const createPo = require("../controllers/CreatePokemon");
// const { Pokemon, Type } = require("../db");

const pokemons = Router();

pokemons.get("/", async (req, res) => {
  if (req.query.order) {
    try {
      const all = await getsPokemons.getAllSort(req.query.order);
      res.status(200).send(all);
    } catch (error) {
      res.status(400).send("query not valid");
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
      const all = getsPokemons.getAll();
      res.status(200).send(all);
    } catch (error) {
      res.status(400).send(error);
    }
  }
});

pokemons.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let r = await getsPokemons.getByID(id);
    console.log("si llego aca");
    res.status(200).send(r);
  } catch (error) {
    res.status(400).send(error);
  }
});

pokemons.post("/", async (req, res) => {
  const y = { name: "manuel", life: 13, type: [2] };
  const x = { name: "andres", life: 22, type: [1, 4] };
  const data = req.body;

  try {
    const r = await createPo.createPokemon(x);
    const s = await createPo.createPokemon(y);
    res.status(200).send(s);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = pokemons;
