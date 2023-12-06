import { Button } from "../Button/Button.jsx";

import { restaurants } from "../../constants/mock.js";

import styles from "./styles.module.scss";

export const RestaurantTabs = ({ setActiveTab }) => {
  return (
    <div className={styles['restaurant-tabs']}>
      {restaurants.map(restaurant => {
        return (
          <Button
            onClick={() => setActiveTab(restaurant.id)}
            className={styles.button}
            key={restaurant.id}
          >
            {restaurant.name}
          </Button>
        );
      })}
    </div>
  );
};
