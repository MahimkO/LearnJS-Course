import { useState } from "react";
import { useSelector } from "react-redux";

import { RestaurantTabs } from "../../components/RestaurantTabs/RestaurantTabs";
import { Restaurant } from "../../components/Restaurant/Restaurant.jsx";

import { selectRestaurants } from "../../redux/features/entities/restaurant/selectors.js";

import styles from "./styles.module.scss";

export const RestaurantsPage = () => {
  const [activeTab, setActiveTab] = useState(null);

  const restaurantsEntities = useSelector(selectRestaurants);
  const restaurants = Object.values(restaurantsEntities);

  const restaurant = restaurants.find(restaurant => restaurant.id === activeTab);

  return (
    <div className={styles['restaurants-page']}>
      <RestaurantTabs setActiveTab={setActiveTab} />

      {activeTab &&
        <Restaurant
          id={restaurant.id}
        />
      }
    </div>
  );
};
