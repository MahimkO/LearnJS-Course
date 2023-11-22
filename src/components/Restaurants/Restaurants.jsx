import { Restaurant } from "../Restaurant/Restaurant";

export const Restaurants = ({restaurants}) => {
  return (
    <div>
      {restaurants && restaurants.map(restaurant => (
        <Restaurant
          id={restaurant.id}
          key={restaurant.id}
          name={restaurant.name}
          menu={restaurant.menu}
          reviews={restaurant.reviews}
        />
      ))}
    </div>
  );
};
