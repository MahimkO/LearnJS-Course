import { useSelector } from "react-redux";

import { Menu } from "../Menu/Menu.jsx";
import { Reviews } from "../Reviews/Reviews.jsx";
import { ReviewForm } from "../ReviewForm/ReviewForm.jsx";

import { selectRestaurantById } from "../../redux/features/entities/restaurant/selectors.js";

import styles from "./styles.module.scss";

export const Restaurant = ({id}) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  return (
    <div className={styles.restaurant}>
      <span className={styles['restaurant-title']}>{restaurant.name}</span>
      <Menu restaurantId={id} menuIds={restaurant.menu} />
      <Reviews restaurantId={id} reviewsIds={restaurant.reviews} />
      <ReviewForm />
    </div>
  );
};
