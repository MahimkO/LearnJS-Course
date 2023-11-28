import { restaurants } from "../../constants/mock.js";

export const RestaurantTabs = ({ setActiveTab }) => {
  return (
    <div>
      {restaurants.map(restaurant => {
        return (
          <button key={restaurant.id} onClick={() => setActiveTab(restaurant.id)}>
            {restaurant.name}
          </button>
        );
      })}
    </div>
  );
};
