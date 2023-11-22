export const Restaurant = ({name, menu, reviews}) => {
  return (
    <>
      <h2>{name}</h2>
      <h3>Menu:</h3>
      <ul>
        {menu.map(menu => (
          <li id={menu.id} key={menu.id}>Dish: {menu.name}; Price: {menu.price}; Ingredients: {
            menu.ingredients.reduce((acc, ingredient) => {
              return acc + `${ingredient}, `
            }, '')
          }</li>
          ))}
      </ul>
      <h3>Reviews:</h3>
      <ul>
        {reviews.map(review => (
          <li id={review.id} key={review.id}>
            Name: {review.user}; Text: {review.text}; Rating: {review.rating}
          </li>
        ))}
      </ul>
    </>
  );
};
