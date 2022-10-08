import style from "./CreatePokemon.modules.css";
import { useState, useDispatch } from "react";
const CreatePokemon = () => {
  const [state, setState] = new useState({
    name: "",
    height: "",
    weight: "",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    image: "",
    types: "",
  });

  const dispatch = useDispatch();

  return (
    <div>
      <form action="">
        <input type="text" id="name" />
      </form>
    </div>
  );
};

export default CreatePokemon;
