import { createSlice } from "@reduxjs/toolkit";

import { getRestaurants } from "./thunks/getRestaurants.js";
import { requestStatuses } from "../../../../constants/requestStatuses.js";

export const restaurantSlice = createSlice({
  name: 'restaurant',
  // если будем работать с api, то в initialState будет пустой объект
  initialState: {
    // в entities кладём Map (объект), где ключи - id, значения - сущности
    entities: {},
    // ids - массив айдишников
    ids: [],
    // status - состояние загрузки
    status: requestStatuses.idle
  },
  // в extraReducers описываются экшены, при которых изменяются состояния в этом слайсе
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        // в RTK можно мутировать и присваивать значение в стейт
        state.status = requestStatuses.pending;
      })
      .addCase(getRestaurants.fulfilled, (state, {payload}) => {
        state.entities = payload.reduce((acc, restaurant) => {
          acc[restaurant.id] = restaurant;

          return acc;
        }, {});

        state.ids = payload.map(({id}) => id);
        state.status = requestStatuses.fulfilled;
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.status = requestStatuses.rejected;
      })
});
