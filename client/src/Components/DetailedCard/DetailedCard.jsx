import { useEffect, useState } from "react";
import axios from "axios";
import style from "./DetailedCard.module.css";

const DetailedCard = ({ id }) => {
  const [poke, setPoke] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/pokemons/${id}`)
      .then((json) => json.data)
      .then((poke) => setPoke(poke));
  }, []);

  const idText = (id) => {
    if (id > 99) {
      return id;
    } else if (id > 9) {
      return "0" + id;
    } else {
      return "00" + id;
    }
  };

  function text(types) {
    var text = types[0];
    let i = 1;
    while (i < types.length) {
      text = text + "/" + types[i];
      i++;
    }
    return text;
  }

  return poke ? (
    <div className={style.back}>
      <div className={style.fondo}>
        <div className={style.id}>No. {idText(poke.id)}</div>

        <span className={style.backImg}>
          <img
            src={
              poke.image
                ? poke.image
                : "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/fa/latest/20220604130249/Unown_%3F_HOME.png/120px-Unown_%3F_HOME.png"
            }
            alt="imagen"
            className={style.img}
          />
        </span>

        <div className={style.datos}>
          <span>Name: {poke.name}</span>
          <span>Types : {text(poke.types)}</span>
          <span>Life: {poke.life ? poke.life + "pts" : "???"}</span>
          <span>Speed: {poke.speed ? poke.speed + "pts" : "???"}</span>
          <span>Weight: {poke.weight ? poke.weight + "pts" : "???"}</span>
          <span>Height: {poke.height ? poke.height + "pts" : "???"}</span>
          <span>Attack: {poke.attack ? poke.attack + "pts" : "???"}</span>
          <span>Defense: {poke.defense ? poke.defense + "pts" : "???"}</span>
        </div>
      </div>
    </div>
  ) : (
    <div>Detalles del pokemon no encontrados</div>
  );
};

export default DetailedCard;
