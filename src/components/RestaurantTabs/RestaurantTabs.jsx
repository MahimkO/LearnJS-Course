import { restaurants } from "../../constants/mock.js";

export const RestaurantTabs = () => {
  return (
    <div>
      {restaurants.map(restaurant => {
        return <button key={restaurant.id}>{restaurant.name}</button>;
      })}
    </div>
  );
};
