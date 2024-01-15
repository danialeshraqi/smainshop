import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { PiShoppingCartSimpleBold } from "react-icons/pi";

import styles from "./Layout.module.css";

function Layout({ children }) {
  const state = useSelector((store) => store.cart);
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <Link to="/Products">ثمین شاپ</Link>
        <Link to="/Checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>ثمین شاپ</p>
      </footer>
    </div>
  );
}

export default Layout;
