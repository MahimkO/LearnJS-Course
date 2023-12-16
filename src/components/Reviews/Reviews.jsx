import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Review } from "../Review/Review.jsx";

import { getReviews } from "../../redux/features/entities/review/thunks/getReviews.js";
import { getUsers } from "../../redux/features/entities/user/thunks/getUsers.js";

import styles from "./styles.module.scss";

export const Reviews = ({restaurantId, reviewsIds}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews(restaurantId));
    dispatch(getUsers());
    // eslint-disable-next-line
  }, [restaurantId]);

  return (
    <div className={styles.reviews}>
      <p>Reviews:</p>
      <ul>
        {reviewsIds.map(id => (
          <li id={id} key={id}>
            <Review id={id}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
