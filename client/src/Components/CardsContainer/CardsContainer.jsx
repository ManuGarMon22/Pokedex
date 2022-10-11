import style from "./CardsContainer.module.css";
import Card from "../Card/Card.jsx";

import Pagination from "../Pagiantion/Pagination.jsx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPokemons, getTypes } from "../../Redux/actions";

const CardsContainer = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  let pos = 0;
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  function prev() {}

  function next() {}

  return (
    <div className={style.background}>
      <Pagination prevF={prev} nextF={next} current={pos} poke={pokemons} />
      {/* {pokemons?.map((e) => (
        <Link to={`pokemon/${e.id}`} key={e.id}>
          <Card name={e.name} type={e.types} image={e.image} id={e.id} />
        </Link> */}
      {/* ))} */}
    </div>
  );
};

export default CardsContainer;
