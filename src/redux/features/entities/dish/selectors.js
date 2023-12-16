export const selectDishModule = (state) => state.dish;

export const selectDishes = (state) => selectDishModule(state).entities;

export const selectDishIds = (state) => selectDishModule(state).ids;

export const selectDishById = (state, id) => selectDishModule(state).entities[id];
