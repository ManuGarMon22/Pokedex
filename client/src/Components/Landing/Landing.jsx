import style from "./Landing.module.css";
import { Link } from "react-router-dom";
// import image from "../images/Logo-Pokemon.png";

function Landing() {
  const num = Math.floor(Math.random() * 6);
  const imgBack = () => {
    console.log(num);
    switch (num) {
      case 0:
        return style.backgroundImg0;
      case 1:
        return style.backgroundImg1;
      case 2:
        return style.backgroundImg2;
      case 3:
        return style.backgroundImg3;
      case 4:
        return style.backgroundImg4;
      default:
        return style.backgroundImg5;
    }
  };

  const text = () => {
    console.log(num);
    if (num > 2) {
      return style.textBtn2;
    } else {
      return style.textBtn1;
    }
  };

  return (
    <div className={`${style.background} ${imgBack()}`}>
      <img
        className={style.logo}
        src="https://i.pinimg.com/originals/9e/39/23/9e3923825ba4a4fa967858f980b8460f.png"
        // src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Pokemon.png"

        alt="LogoPokemon"
      />
      {/* <img src={image} alt="LogoPokemon" /> */}
      <div className={style.btn}>
        <Link to="/home" className={text()}>
          <a>Enter</a>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
