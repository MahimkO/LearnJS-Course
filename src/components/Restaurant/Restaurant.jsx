import { Dish } from "../Dish/Dish.jsx";
import { ReviewForm } from "../ReviewForm/ReviewForm.jsx";

import styles from "./styles.module.scss";

export const Restaurant = ({name, menu, reviews}) => {
  return (
    <div className={styles.restaurant}>
      <p className={styles['restaurant-title']}>{name}</p>
      <div className={styles['restaurant-menu']}>
        <p>Menu:</p>
        <ul>
          {menu.map(menu => (
            <li id={menu.id} key={menu.id}>
                <Dish name={menu.name} price={menu.price} ingredients={menu.ingredients} />
            </li>
            ))}
        </ul>
      </div>
      <div className={styles['restaurant-reviews']}>
        <p>Reviews:</p>
        <ul>
          {reviews.map(review => (
            <li id={review.id} key={review.id}>
              Name: {review.user}; Text: {review.text}; Rating: {review.rating}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles['restaurant-feedback']}>
        <p>Leave feedback:</p>
        <ReviewForm />
      </div>
    </div>
  );
};
