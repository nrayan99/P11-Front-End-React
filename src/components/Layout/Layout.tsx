import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import style from "./Layout.module.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "../../Router";

function Layout() {
  return (
    <div className={style.Layout}>
      <BrowserRouter>
        <Header />
        <div className={style.content}>
          <Router />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Layout;
