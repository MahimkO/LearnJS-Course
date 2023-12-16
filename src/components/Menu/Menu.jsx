import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Dish } from "../Dish/Dish.jsx";

import { getDishes } from "../../redux/features/entities/dish/thunks/getDishes.js";

import styles from "./styles.module.scss";

export const Menu = ({restaurantId, menuIds}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes(restaurantId));
    // eslint-disable-next-line
  }, [restaurantId]);

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
