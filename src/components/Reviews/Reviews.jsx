import { Review } from "../Review/Review.jsx";

import styles from "./styles.module.scss";

export const Reviews = ({reviewsIds}) => {
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
