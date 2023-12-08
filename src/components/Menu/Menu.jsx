import { Dish } from "../Dish/Dish.jsx";

import styles from "./styles.module.scss";

export const Menu = ({menuIds}) => {
  return (
    <div className={styles.menu}>
      <p>Menu:</p>
      <ul>
        {menuIds.map(id => (
          <li id={id} key={id}>
            <Dish id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
