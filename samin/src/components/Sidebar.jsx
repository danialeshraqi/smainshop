import { FaListUl } from "react-icons/fa";

import { createQueryObject } from "../helper/helper";
import { categories } from "../constants/list";

import styles from "./Sidebar.module.css";

function Sidebar({ query, setQuery }) {
  const categoryHandler = (value) => {
    setQuery((query) => createQueryObject(query, { category: value }));
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>دسته بندی</p>
      </div>
      <ul>
        {categories.map((item) => {
          return (
            <li
              onClick={() => categoryHandler(item.value)}
              key={item.id}
              className={item.value === query.category ? styles.selected : null}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
