import { useState, useEffect } from "react";

import { RestaurantTabs } from "../../components/RestaurantTabs/RestaurantTabs";
import { Restaurants } from "../../components/Restaurants/Restaurants";

import { restaurants } from "../../constants/mock.js";

export const RestaurantsPage = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    if (activeTab) {
      const activeRestaurant = restaurants.filter(restaurant => restaurant.id === activeTab);
      setRestaurant(activeRestaurant);
    }
  }, [activeTab]);

  return (
    <>
      <RestaurantTabs setActiveTab={setActiveTab} />
      <Restaurants restaurants={restaurant} />
    </>
  );
};
