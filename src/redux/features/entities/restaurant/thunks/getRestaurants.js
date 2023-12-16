import { createAsyncThunk } from "@reduxjs/toolkit";

import { selectRestaurantIds } from "../selectors.js";

export const getRestaurants = createAsyncThunk(
  // первым аргументом идёт название модуля
  'restaurant/getRestaurants',
  // вторым аргументом идёт асинхронная функция, в которой будет вся логика
  async (
    // первый аргумент - все параметры, что мы передадим
    _,
    // второй - нам передадут набор вспомогательных фукнций сюда (например, 'getState')
    { rejectWithValue }
  ) => {
    const response = await fetch('http://localhost:3001/api/restaurants/');

    const result = await response.json();

    if (!result?.length) {
      return rejectWithValue('Empty restaurants');
    }

    return result;
  },
  // третьим аргументом идёт объект с настройками (условие выполнения логики)
  // этот блок выполняется первым!
  {
    condition: (_, { getState }) => !selectRestaurantIds(getState()).length,
  }
);
