import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getByName } from "../../Redux/actions";
// ejemplo de datos para los filtros
// { order: "name", type: "grass", local: true, descent: false }
const Searched = () => {
  const dispatch = useDispatch();

  const [bus, setBus] = useState("");

  const search = (e) => {
    e.preventDefault();

    dispatch(getByName(bus));
  };

  function handleOnChange(e) {
    setBus(e.target.value);
  }

  return (
    <div>
      <div>Result</div>

      <form action="" onSubmit={search}>
        <input
          type="text"
          placeholder="Pokemon name"
          onChange={handleOnChange}
          value={bus}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Searched;
