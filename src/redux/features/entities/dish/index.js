import { createSlice } from "@reduxjs/toolkit";

import { requestStatuses } from "../../../../constants/requestStatuses.js";
import { getDishes } from "./thunks/getDishes.js";

export const dishSlice = createSlice({
  name: 'dish',
  initialState: {
    entities: {},
    ids: [],
    status: requestStatuses.idle,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.pending, (state) => {
        state.status = requestStatuses.pending;
      })
      .addCase(getDishes.fulfilled, (state, {payload}) => {
        state.entities = payload.reduce((acc, dish) => {
          acc[dish.id] = dish;

          return acc;
        }, state.entities); // работать будем сразу с entities

        // в ids нужно избавиться от дублей, поэтому создаём массив через Set
        state.ids = Array.from(new Set([...state.ids, ...payload.map(({id}) => id)]));
        state.status = requestStatuses.fulfilled;
      })
      .addCase(getDishes.rejected, (state) => {
        state.status = requestStatuses.rejected;
      })
});
