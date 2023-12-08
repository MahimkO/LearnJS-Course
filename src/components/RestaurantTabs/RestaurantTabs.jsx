import { useSelector } from "react-redux";

import { Button } from "../Button/Button.jsx";

import { selectRestaurants } from "../../redux/features/entities/restaurant/selectors.js";

import styles from "./styles.module.scss";

export const RestaurantTabs = ({ setActiveTab }) => {
  const restaurantsEntities = useSelector(selectRestaurants);
  const restaurants = Object.values(restaurantsEntities);

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
