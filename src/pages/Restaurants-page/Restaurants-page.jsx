import { useState } from "react";

import { RestaurantTabs } from "../../components/RestaurantTabs/RestaurantTabs";
import { Restaurant } from "../../components/Restaurant/Restaurant.jsx";

import { restaurants } from "../../constants/mock.js";

export const RestaurantsPage = () => {
  const [activeTab, setActiveTab] = useState(null);

  const restaurant = restaurants.find(restaurant => restaurant.id === activeTab);

  return (
    <div>
      <RestaurantTabs setActiveTab={setActiveTab} />

      {activeTab &&
        <Restaurant
          id={restaurant.id}
          key={restaurant.id}
          name={restaurant.name}
          menu={restaurant.menu}
          reviews={restaurant.reviews}
        />
      }
    </div>
  );
};
