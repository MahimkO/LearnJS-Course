import { useReducer } from "react";

import { Counter } from "../Counter/Counter";

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
    // пока что инлайн стилями сделал, потом на css переделаю, когда пройдём
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            name="name"
            type="text"
            value={formValue.name}
            onChange={(e) => dispatch(
              {type: 'setName', payload: e.target.value}
            )}
          />
        </div>
        <div>
          <label htmlFor="text">Text: </label>
          <input
            name="text"
            type="text"
            value={formValue.text}
            onChange={(e) => dispatch(
              {type: 'setText', payload: e.target.value}
            )}
          />
        </div>
        <div style={{display: 'flex'}}>
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
    </div>
  );
};
