import axios from "axios";

export const CREATE_POKEMON = "CREATE_POKEMON";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_TYPES = "GET_TYPES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_ID = "GET_BY_ID";
export const FILTER = "FILTER";

export const getPokemons = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3001/pokemons")
      .then((json) => json.data)
      .then((f) => {
        dispatch({ type: GET_POKEMONS, payload: f });
      })
      .catch((error) => alert("error con la api" + error));
  };
};

export const createPokemon = (pokemon) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3001/pokemons", pokemon)
      .then((json) => json.data)
      .then((f) => dispatch({ type: CREATE_POKEMON, payload: f }))
      .catch((error) => alert("error con la peticion al backend" + error));
  };
};

export const getTypes = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3001/types")
      .then((json) => json.data)
      .then((f) => dispatch({ type: GET_TYPES, payload: f }))
      .catch((error) => alert("error con la peticion al backend" + error));
  };
};

export const getByID = (id) => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:3001/pokemons/${id}`)
      .then((json) => json.data)
      .then((f) => dispatch({ type: GET_BY_ID, payload: f }))
      .catch((error) => alert("error con la peticion al backend" + error));
  };
};

export const getByName = (name) => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:3001/pokemons?name=${name}`)
      .then((json) => json.data)
      .then((f) => dispatch({ type: GET_BY_NAME, payload: f }))
      .catch((error) => alert("error con la peticion al backend" + error));
  };
};

export const getOrder = (filtros) => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:3001/pokemons${depende(filtros)}`)
      .then((json) => json.data)
      .then((f) => {
        console.log(f);
        dispatch({ type: FILTER, payload: f });
      })
      .catch((error) => alert("error con la peticion al backend"));
  };
};

const depende = (filtros) => {
  console.log(filtros);
  var text = "?";
  if (filtros.order && filtros.order !== "null") {
    text = text + "order=" + filtros.order + "&";
  }
  if (filtros.type && filtros.type !== "null") {
    text = text + "type=" + filtros.type + "&";
  }
  if (filtros.origin && filtros.origin !== "null") {
    text = text + "origin=" + filtros.origin + "&";
  }
  if (filtros.descent) {
    text = text + "descent=true";
  }
  return text;
};

getPokemons();
