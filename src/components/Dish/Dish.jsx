import { useReducer } from "react";
import { useSelector } from "react-redux";

import { Counter } from "../Counter/Counter";

import { selectDishById } from "../../redux/features/entities/dish/selectors.js";

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

export const Dish = ({id}) => {
  const [state, dispatch] = useReducer(reducer, defaultValue);
  const dish = useSelector((state) => selectDishById(state, id));

  return (
    // TODO пока что сделал через инлайн стили, потому что мы модули css ещё не подключаем
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <span>Dish: {dish.name}; Price: {dish.price}; Ingredients: {
        dish.ingredients.reduce((acc, ingredient) => {
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
