const { Type } = require("../db");
const data = require("../utils.js");

const getTypes = async () => {
  let tipos = await Type.findAll(/*{ attributes: ["name"] }*/);
  ty = tipos.map((e) => e.toJSON());
  return ty;
};

const getByNameType = async (datos, nameType) => {
  const listado = datos.filter((e) => utilidad(e, nameType));
  return listado;
};

const utilidad = (e, nameType) => {
  let coincidencia = false;
  e.types.forEach((element) => {
    if (element === nameType) {
      coincidencia = true;
    }
  });
  return coincidencia;
};

module.exports = { getTypes, getByNameType };
