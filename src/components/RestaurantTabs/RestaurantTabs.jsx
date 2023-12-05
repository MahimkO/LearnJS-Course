import { restaurants } from "../../constants/mock.js";

import styles from "./styles.module.scss";

export const RestaurantTabs = ({ setActiveTab }) => {
  return (
    <div className={styles['restaurant-tabs']}>
      {restaurants.map(restaurant => {
        return (
          <button
            className={styles.button}
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
