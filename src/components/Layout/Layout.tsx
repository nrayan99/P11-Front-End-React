import App from "../../App";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import style from "./Layout.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../../pages/NotFound/NotFound";

function Layout() {
  return (
    <div className={style.Layout}>
      <BrowserRouter>
        <Header />
        <div className={style.content}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Layout;
