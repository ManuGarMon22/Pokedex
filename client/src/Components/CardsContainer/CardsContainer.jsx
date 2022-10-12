import style from "./CardsContainer.module.css";
import Card from "../Card/Card.jsx";
import Pagination from "../Pagiantion/Pagination.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPokemons } from "../../Redux/actions";
import { Link } from "react-router-dom";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const [page, setPage] = useState(1);
  const [dataPerPage] = useState(12);

  useEffect(() => {
    dispatch(getPokemons());
    setPage(1);
  }, [dispatch]);

  const lastIndexCard = page * dataPerPage;
  const firstIndexCard = lastIndexCard - dataPerPage;
  const toView = pokemons.slice(firstIndexCard, lastIndexCard);

  const paginate = (pageNumber) => setPage(pageNumber);

  return toView.length > 0 ? (
    <div className={style.background}>
      <h2>Pokemons:</h2>
      <div className={style.data}>
        {toView.map((e) => (
          <Link key={e.id} to={`/pokemon/${e.id}`} className={style.card}>
            <Card name={e.name} type={e.types} image={e.image} id={e.id} />
          </Link>
        ))}
      </div>
      <Pagination
        perPage={dataPerPage}
        total={pokemons.length}
        paginate={paginate}
      />
    </div>
  ) : (
    <div className={style.inutil}>
      <h2>Sin resultados</h2>
    </div>
  );
};

export default CardsContainer;
