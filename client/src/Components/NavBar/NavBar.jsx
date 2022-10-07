import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={style.img}>
      <Link>
        <img
          className={style.logo}
          src="https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png"
          alt="Logo"
        />
      </Link>
    </nav>
  );
};

export default NavBar;