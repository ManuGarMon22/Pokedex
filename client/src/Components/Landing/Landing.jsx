import style from "./Landing.module.css";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { getPokemons, getTypes } from "../../Redux/actions";

// import image from "../images/Logo-Pokemon.png";

const Landing = () => {
  let num = Math.floor(Math.random() * 6);

  function back() {
    switch (num) {
      case 0:
        return style.backgroundImg0;
      case 1:
        return style.backgroundImg1;
      case 2:
        return style.backgroundImg2;
      case 3:
        return style.backgroundImg3;
      default:
        return style.backgroundImg4;
    }
  }

  function text() {
    if (num > 2) {
      return style.textBtn2;
    } else {
      return style.textBtn1;
    }
  }

  const dispatch = useDispatch();

  function gets() {
    dispatch(getTypes());
    dispatch(getPokemons());
  }
  return (
    <div className={`${style.background} ${back()}`}>
      <img
        className={style.logo}
        src="https://i.pinimg.com/originals/9e/39/23/9e3923825ba4a4fa967858f980b8460f.png"
        // src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Pokemon.png"

        alt="LogoPokemon"
      />
      <div className={style.btn}>
        <Link to="/home" className={text()}>
          <p onClick={gets}>Enter</p>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
