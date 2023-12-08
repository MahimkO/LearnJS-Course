import { createSlice } from "@reduxjs/toolkit";

import { normalizedRestaurants } from "../../../../constants/normalized-mock.js";

export const restaurantSlice = createSlice({
  name: 'restaurant',
  // если будем работать с api, то в initialState будет пустой объект
  initialState: {
    // в entities кладём Map (объект), где ключи - id, значения - сущности
    entities: normalizedRestaurants.reduce((acc, restaurant) => {
      // если нам не нужно мутировать данные, то лучше переписать примерно так:
      // return {...acc, [restaurant.id] = restaurant}

      acc[restaurant.id] = restaurant;

      return acc;
    }, {}),
    // ids - массив айдишников
    ids: normalizedRestaurants.map(({id}) => id),
  },
});
