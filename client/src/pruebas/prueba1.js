import axios from "axios";

const getPokemon = async () => {
  return await axios
    .get("http://localhost:3001/pokemons")
    .then((json) => json.data)
    .then((f) => {
      console.log(f);
    })
    .catch((error) => alert("error con la api" + error));
};

function getPokemons() {
  return getPokemon();
}

export default { getPokemons };
