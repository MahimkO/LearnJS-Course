import { Restaurant } from "../Restaurant/Restaurant.jsx";

export const RestaurantsBody = ({restaurantsList}) => {
  return (
    <>
      {restaurantsList.map(restaurant => (
        <Restaurant
          id={restaurant.id}
          key={restaurant.id}
          name={restaurant.name}
          menu={restaurant.menu}
          reviews={restaurant.reviews}
        />
      ))}
    </>
  );
};
