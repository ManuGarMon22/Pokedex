const { Router } = require("express");
const { getTypes } = require("../controllers/GetTypes");

const types = Router();

types.get("/", async (req, res) => {
  try {
    const ty = await getTypes();
    res.status(200).send(ty);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = types;
