import { useReducer } from "react";

import { Counter } from "../Counter/Counter";

const defaultValue = {counter: 0};

const step = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case 'setCounter':
      return {
        counter: action.payload,
      };

    default:
      return state;
  }
};

export const Dish = ({name, price, ingredients}) => {
  const [state, dispatch] = useReducer(reducer, defaultValue);

  return (
    // TODO пока что сделал через инлайн стили, потому что мы модули css ещё не подключаем
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <span>Dish: {name}; Price: {price}; Ingredients: {
        ingredients.reduce((acc, ingredient) => {
            return acc + `${ingredient}, `
        }, '')
      }</span>
      <Counter
        value={state.counter}
        increment={() => dispatch(
          {type: 'setCounter', payload: state.counter + step}
        )}
        decrement={() => dispatch(
          {type: 'setCounter', payload: state.counter - step}
        )}
      />
    </div>
  );
};
