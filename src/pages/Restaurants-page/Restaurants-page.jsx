import { RestaurantTabs } from "../../components/RestaurantTabs/RestaurantTabs";
import { Restaurants } from "../../components/Restaurants/Restaurants";

import { restaurants } from "../../constants/mock.js";

export const RestaurantsPage = () => {
  return (
    <>
      <RestaurantTabs />
      <Restaurants restaurants={restaurants}/>
    </>
  );
};
