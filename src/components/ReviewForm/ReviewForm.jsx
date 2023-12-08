import { useReducer } from "react";

import { Counter } from "../Counter/Counter";

import styles from "./styles.module.scss";

const defaultFormValue = {
  name: '',
  text: '',
  rating: 1,
};

const ratingStep = 0.5;

const reducer = (state, action) => {
  switch (action.type) {
    case 'setName':
      return {
        ...state,
        name: action.payload,
      };

    case 'setText':
      return {
        ...state,
        text: action.payload,
      };

    case 'setRating':
      return {
        ...state,
        rating: action.payload,
      };

    default:
      return state;
  }
};

export const ReviewForm = () => {
  const [formValue, dispatch] = useReducer(reducer, defaultFormValue);

  return (
    <div className={styles['review-form']}>
      <div className={styles['name']}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formValue.name}
          onChange={(e) => dispatch(
            {type: 'setName', payload: e.target.value}
          )}
        />
      </div>
      <div className={styles['text']}>
        <label htmlFor="text">Text: </label>
        <input
          id="text"
          name="text"
          type="text"
          value={formValue.text}
          onChange={(e) => dispatch(
            {type: 'setText', payload: e.target.value}
          )}
        />
      </div>
      <div className={styles['rating']}>
        <span>Rating:</span>
        <Counter
          min={1}
          value={formValue.rating}
          increment={() => dispatch(
            {type: 'setRating', payload: formValue.rating + ratingStep}
          )}
          decrement={() => dispatch(
            {type: 'setRating', payload: formValue.rating - ratingStep}
          )}
        />
      </div>
    </div>
  );
};
