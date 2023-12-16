import { createSlice } from "@reduxjs/toolkit";

import { requestStatuses } from "../../../../constants/requestStatuses.js";
import { getUsers } from "./thunks/getUsers.js";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    entities: {},
    ids: [],
    status: requestStatuses.idle,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = requestStatuses.pending;
      })
      .addCase(getUsers.fulfilled, (state, {payload}) => {
        state.entities = payload.reduce((acc, user) => {
          acc[user.id] = user;

          return acc;
        }, state.entities); // работать будем сразу с entities

        // в ids нужно избавиться от дублей, поэтому создаём массив через Set
        state.ids = Array.from(new Set([...state.ids, ...payload.map(({id}) => id)]));
        state.status = requestStatuses.fulfilled;
      })
      .addCase(getUsers.rejected, (state) => {
        state.status = requestStatuses.rejected;
      })
});
