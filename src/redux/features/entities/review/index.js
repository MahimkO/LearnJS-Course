import { createSlice } from "@reduxjs/toolkit";

import { requestStatuses } from "../../../../constants/requestStatuses.js";
import { getReviews } from "./thunks/getReviews.js";

export const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    entities: {},
    ids: [],
    status: requestStatuses.idle,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getReviews.pending, (state) => {
        state.status = requestStatuses.pending;
      })
      .addCase(getReviews.fulfilled, (state, {payload}) => {
        state.entities = payload.reduce((acc, review) => {
          acc[review.id] = review;

          return acc;
        }, state.entities); // работать будем сразу с entities

        // в ids нужно избавиться от дублей, поэтому создаём массив через Set
        state.ids = Array.from(new Set([...state.ids, ...payload.map(({id}) => id)]));
        state.status = requestStatuses.fulfilled;
      })
      .addCase(getReviews.rejected, (state) => {
        state.status = requestStatuses.rejected;
      })
});
