import { useContext } from "react";

import { restaurants } from "../../constants/mock.js";
import { ThemeContext } from "../Layout/Layout.jsx";

import styles from "./styles.module.scss";

export const RestaurantTabs = ({ setActiveTab }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles['restaurant-tabs']}>
      {restaurants.map(restaurant => {
        return (
          <button
            className={`${styles.button} ${theme.theme === 'dark' ? styles['theme-dark'] : styles['theme-light']}`}
            onClick={() => setActiveTab(restaurant.id)}
            key={restaurant.id}
          >
            {restaurant.name}
          </button>
        );
      })}
    </div>
  );
};
