import { Dish } from "../Dish/Dish.jsx";

export const Restaurant = ({name, menu, reviews}) => {
  return (
    <>
      <h2>{name}</h2>
      <h3>Menu:</h3>
      <ul>
        {menu.map(menu => (
          <li id={menu.id} key={menu.id}>
              <Dish name={menu.name} price={menu.price} ingredients={menu.ingredients} />
          </li>
          ))}
      </ul>
      <h3>Reviews:</h3>
      <ul>
        {reviews.map(review => (
          // не стал выносить в отдельный компонент Review, потому что нет нужды выносить 1 строчку вёрстки
          <li id={review.id} key={review.id}>
            Name: {review.user}; Text: {review.text}; Rating: {review.rating}
          </li>
        ))}
      </ul>
    </>
  );
};
