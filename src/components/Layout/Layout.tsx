import React from "react";
import App from "../../App";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import style from "./Layout.module.scss";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function Layout() {
  return (
    <div className={style.Layout}>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<App/>} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Layout;
