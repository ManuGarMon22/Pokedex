import style from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getOrder, getTypes } from "../../Redux/actions";

const Filter = () => {
  const [filtros, setFiltros] = useState({
    order: "",
    type: "",
    origin: "",
    descent: false,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes());
  }, []);

  var types = useSelector((state) => state.types);

  function handleOnChange(e) {
    console.log(filtros.descent);
    if (e.target.name === "descent") {
      setFiltros({
        ...filtros,
        descent: !filtros.descent,
      });
    } else {
      setFiltros({
        ...filtros,
        [e.target.name]: e.target.value,
      });
    }
  }

  function fill(e) {
    e.preventDefault();
    dispatch(getOrder(filtros));
  }

  return (
    <div className={style.back}>
      <div className={style.fil}>
        <p>Filters:</p>
        <span>
          <label htmlFor="order">Choose type: </label>
          <select name="order" onChange={handleOnChange} value={filtros.order}>
            <option value="null">Select a property</option>
            <option value="name">Name</option>
            <option value="attack">attack</option>
            <option value="life">life</option>
          </select>
        </span>
        <span>
          <label htmlFor="type">Choose type: </label>
          <select name="type" onChange={handleOnChange} value={filtros.type}>
            <option value="null">Select a type</option>
            {types?.map((element) => (
              <option value={element.name} key={element.id}>
                {element.name}
              </option>
            ))}
          </select>
        </span>
        <span>
          <label htmlFor="origin">Choose Origin: </label>
          <select
            name="origin"
            onChange={handleOnChange}
            value={filtros.origin}
          >
            <option value="null">All</option>
            <option value="local">Created</option>
            <option value="api">Existed</option>
          </select>
        </span>
        <span>
          <label htmlFor="descent">Descendent?</label>
          <input
            type="checkbox"
            value={filtros.descent}
            name="descent"
            onChange={handleOnChange}
          />
        </span>
        <button className={style.btn} onClick={fill}>
          Apply
        </button>
      </div>
    </div>
  );
};

// export const mapStateToProps = (state) => {
//   return {
//     types: state.types,
//   };
// };

// export const mapDispatchToProps = (dispatch) => {
//   return {
//     getCharacters: () => {
//       dispatch(getTypes());
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
export default Filter;
