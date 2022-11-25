import style from "./Header.module.scss";
import logo from "../../assets/logo-red.svg";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isCurrentPage = (path: string) => {
    return location.pathname === path ? style.active : "";
  };
  return (
    <header className={style.Header}>
      <img src={logo} alt="logo kasa" />
      <nav>
        <ul>
          <li>
            <Link to={"/"} className={isCurrentPage('/')}>Accueil</Link>
          </li>
          <li>
            <Link to={"/a-propos"} className={isCurrentPage("/a-propos")}>A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
