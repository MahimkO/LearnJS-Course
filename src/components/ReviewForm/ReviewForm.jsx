import { useReducer } from "react";

import { Counter } from "../Counter/Counter";

const defaultFormValue = {
  name: '',
  text: '',
  rating: 1,
};

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
    // рейтинг у меня в локальный стейт компонента кладётся сейчас.
    // можно переписать компонент Counter и убрать из него локальный стейт,
    // но тогда придётся везде использовать несколько редьюсеров или один общий
    // в родительском компоненте и прокидывать функцию изменения стора в дочерние компоненты.
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
              {type: 'setName', payload: e.target.value})
            }
          />
        </div>
        <div>
          <label htmlFor="text">Text: </label>
          <input
            name="text"
            type="text"
            value={formValue.text}
            onChange={(e) => dispatch(
              {type: 'setText', payload: e.target.value})
            }
          />
        </div>
        <div style={{display: 'flex'}}>
          <span>Rating:</span>
          <Counter
            step={0.5}
            min={1}
            defaultValue={1}
          />
        </div>
      </div>
    </div>
  );
};
