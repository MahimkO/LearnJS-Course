import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { RestaurantTabs } from "../../components/RestaurantTabs/RestaurantTabs";
import { Restaurant } from "../../components/Restaurant/Restaurant.jsx";

import { getRestaurants } from "../../redux/features/entities/restaurant/thunks/getRestaurants.js";

import styles from "./styles.module.scss";

export const RestaurantsPage = () => {
  const [activeTab, setActiveTab] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles['restaurants-page']}>
      <RestaurantTabs setActiveTab={setActiveTab} />

      {activeTab &&
        <Restaurant id={activeTab} />
      }
    </div>
  );
};
