import { RestaurantsHeader } from "../RestaurantsHeader/RestaurantsHeader.jsx";
import { RestaurantsBody } from "../RestaurantsBody/RestaurantsBody.jsx";

import { restaurants } from "../../constants/mock.js";

export const Restaurants = () => {
  return (
    <>
      <RestaurantsHeader />
      <RestaurantsBody restaurantsList={restaurants}/>
    </>
  );
};
