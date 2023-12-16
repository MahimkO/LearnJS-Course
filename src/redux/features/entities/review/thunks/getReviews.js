import { createAsyncThunk } from "@reduxjs/toolkit";

import { selectRestaurantReviewIds } from "../../restaurant/selectors.js";
import { selectReviewIds } from "../selectors.js";

export const getReviews = createAsyncThunk(
  'review/getReviews',
  async (
    restaurantId,
    { rejectWithValue }
  ) => {
    const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);

    const result = await response.json();

    if (!Object.values(result).length) {
      return rejectWithValue('There is no reviews for this restaurant');
    }

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();
      const restaurantReviewIds = selectRestaurantReviewIds(state, restaurantId);
      const reviewIds = selectReviewIds(state);

      return !restaurantReviewIds.every((id) => reviewIds.includes(id));
    },
  }
);
