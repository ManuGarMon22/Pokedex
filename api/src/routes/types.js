const { Router } = require("express");
const { getTypes, getByNameType } = require("../controllers/GetTypes");

const types = Router();

types.get("/", async (req, res) => {
  try {
    const ty = await getTypes();
    res.status(200).send(ty);
  } catch (error) {
    res.status(400).send(error);
  }
});

types.get("/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const ty = await getByNameType(name);
    res.status(200).send(ty);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = types;
