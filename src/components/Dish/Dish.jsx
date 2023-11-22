import { Counter } from "../Counter/Counter";

export const Dish = ({name, price, ingredients}) => {
    return (
        // пока что сделал через инлайн стили, потому что мы модули css ещё не подключаем
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <span>Dish: {name}; Price: {price}; Ingredients: {
                ingredients.reduce((acc, ingredient) => {
                    return acc + `${ingredient}, `
                }, '')
            }</span>
            <Counter />
        </div>
    );
};
