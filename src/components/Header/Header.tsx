import style from "./Header.module.scss";
import logo from "../../assets/logo-red.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={style.Header}>
      <img src={logo} alt="logo kasa" />
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Accueil</Link>
          </li>
          <li>
            <Link to={"/a-propos"}>A Propos </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
