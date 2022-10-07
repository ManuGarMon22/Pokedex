import style from "./CardsContainer.module.css";
import Card from "../Card/Card.jsx";

const CardsContainer = () => {
  const name = "Mightyena",
    type = "Plant",
    image =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    id = "2";

  return (
    <div className={style.background}>
      
      <Card name={name} type={type} image={image} id={id} />
    </div>
  );
};

export default CardsContainer;
