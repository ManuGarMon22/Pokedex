const { Type } = require("../db");
const data = require("../utils.js");

const getTypes = async () => {
  let tipos = await Type.findAll(/*{ attributes: ["name"] }*/);
  data.types = tipos.map((e) => e.toJSON());
  return data.types;
};

module.exports = { getTypes };
