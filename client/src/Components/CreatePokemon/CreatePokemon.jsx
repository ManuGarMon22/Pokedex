import style from "./CreatePokemon.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPokemon, getTypes } from "../../Redux/actions";

const CreatePokemon = () => {
  const [poke, setPoke] = new useState({
    name: "",
    height: 0,
    weight: 0,
    life: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    image: "",
    types: [],
  });

  const [required, setRequired] = useState(false);
  const dispatch = useDispatch();

  const types = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  const handleOnchange = (e) => {
    if (e.target.name === "type") {
      const validar = poke.types.indexOf(e.target.value);
      if (validar === -1) {
        setPoke({
          ...poke,
          types: [...poke.types, e.target.value],
        });
      } else {
        setPoke({
          ...poke,
          types: poke.types.splice(validar - 1, 1),
        });
      }
    } else if (e.target.name === "name" || e.target.name === "image") {
      setPoke({
        ...poke,
        [e.target.name]: e.target.value,
      });
    } else {
      setPoke({
        ...poke,
        [e.target.name]: parseInt(e.target.value),
      });
    }
  };

  const create = (e) => {
    e.preventDefault();
    if (poke.name !== "" && types.length > 0) {
      dispatch(createPokemon(poke));
    } else {
      setRequired(true);
    }
  };

  return (
    <div className={style.back}>
      <h2 className={style.title}>Creating a Pokemon!</h2>
      <div className={style.required}>* (required)</div>

      <form action="" onSubmit={create} className={style.formulario}>
        <div className={style.ingresos}>
          <div className={style.datos}>
            <label className={required ? style.visible : style.invisible}>
              name is required
            </label>
            <label>*Name: </label>
            <input
              type="text"
              name="name"
              onChange={handleOnchange}
              value={poke.name}
            />
            <label>Height: </label>
            <input
              type="number"
              name="height"
              onChange={handleOnchange}
              value={poke.height}
            />
            <label>Weight: </label>
            <input
              type="number"
              name="weight"
              onChange={handleOnchange}
              value={poke.weight}
            />
            <label>Life: </label>
            <input
              type="number"
              name="life"
              onChange={handleOnchange}
              value={poke.life}
            />
            <label>Attack: </label>
            <input
              type="number"
              name="attack"
              onChange={handleOnchange}
              value={poke.attack}
            />
            <label>Defense: </label>
            <input
              type="number"
              name="defense"
              onChange={handleOnchange}
              value={poke.defense}
            />
            <label>Speed: </label>
            <input
              type="number"
              name="speed"
              onChange={handleOnchange}
              value={poke.speed}
            />
            <label>image(URL): </label>
            <input
              type="text"
              name="image"
              onChange={handleOnchange}
              value={poke.image}
            />
          </div>
          <div className={style.tipos}>
            <span>
              <label className={required ? style.visible : style.invisible}>
                required to select a type
              </label>
              <br></br>
              <label>*Select types for pokemon:</label>
            </span>
            <div className={style.tiposDatos}>
              {types?.map((e) => (
                <span key={e.id}>
                  <label htmlFor={e.name}>{e.name}</label>
                  <input
                    type="checkbox"
                    onChange={handleOnchange}
                    value={e.id}
                    name="type"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className={style.btnSpace}>
          <br />
          <button className={style.btn}>Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePokemon;
