import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";

import styles from "./BasketSidebar.module.css";
import { useDispatch } from "react-redux";
import { checkout } from "../features/cart/cartSlice";

function BasketSidebar({ state }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>مجموع:</p>
        <span>{state.total} $</span>
      </div>
      <div>
        <FaHashtag />
        <p>تعداد:</p>
        <span>{state.itemsCounter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>وضعیت:</p>
        <span>{!state.checkout && "در حال پردازش..."}</span>
      </div>
      <button onClick={() => dispatch(checkout())}>پاک کردن همه</button>
    </div>
  );
}

export default BasketSidebar;
