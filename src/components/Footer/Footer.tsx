import styles from "./Footer.module.scss";
import logoWhite from "../../assets/logo-white.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <img src={logoWhite} alt="logo kasa" />
        <span>© 2020 Kasa. All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
