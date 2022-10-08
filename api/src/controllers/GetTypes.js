const { Type } = require("../db");
const data = require("../utils.js");

const getTypes = async () => {
  let tipos = await Type.findAll(/*{ attributes: ["name"] }*/);
  ty = tipos.map((e) => e.toJSON());
  return ty;
};

const getTypesDB = async () => {
  const tipos = await Type.findAll();
  let archivo = tipos.map((e) => e.toJSON());
  archivo.map((e) => data.types.push(e));

  return data.types;
};

module.exports = { getTypes };
