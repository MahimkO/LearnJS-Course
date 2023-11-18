import { restaurants } from "../../constants/mock.js";

export const RestaurantsHeader = () => {
  return (
    <p>
      <button>{restaurants[0].name}</button> <button>{restaurants[1].name}</button> <button>{restaurants[2].name}</button> <button>{restaurants[3].name}</button>
    </p>
  );
};
