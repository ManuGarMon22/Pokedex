import style from "./Searched.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getByName } from "../../Redux/actions";

// ejemplo de datos para los filtros
// { order: "name", type: "grass", origin: local/api, descent: false/true }
const Searched = () => {
  const dispatch = useDispatch();

  const [bus, setBus] = useState("");

  const search = (e) => {
    e.preventDefault();
    if (bus !== "") {
      dispatch(getByName(bus));
    }
  };

  function handleOnChange(e) {
    setBus(e.target.value);
  }

  return (
    <div className={style.back}>
      <form action="" onSubmit={search}>
        <input
          className={style.inData}
          type="text"
          placeholder="Pokemon name"
          spellCheck="false"
          onChange={handleOnChange}
          value={bus}
        />
        <button className={style.btn}>Search</button>
      </form>
    </div>
  );
};

export default Searched;
