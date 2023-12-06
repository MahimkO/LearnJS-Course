import { configureStore } from "@reduxjs/toolkit";

import { restaurantSlice } from "./features/entities/restaurant/index.js";
import { dishSlice } from "./features/entities/dish/index.js";
import { reviewSlice } from "./features/entities/review/index.js";
import { userSlice } from "./features/entities/user/index.js";

export const store = configureStore({
  reducer: {
    restaurant: restaurantSlice.reducer,
    dish: dishSlice.reducer,
    review: reviewSlice.reducer,
    user: userSlice.reducer,
  },
});
