import { useState } from "react";

export const Counter = ({
  step = 1,
  min = 0,
  max = 5,
  defaultValue = 0
}) => {
    // положил useState прям тут, потому что сейчас непонятна дальнейшая логика страницы.
    // в дальнейшем, скорее всего, мы будем должны забирать эти значения и что-то с ними делать,
    // и тогда я буду в пропсах получать и сеттер, и сам счётчик
    const [counter, setCounter] = useState(defaultValue);

    return (
        <div>
            <button
                onClick={() => setCounter((prev) => {
                    return (prev >= 0) ? prev - step : prev;
                })}
                disabled={counter <= min}
            >
                -
            </button>
            <span> {counter} </span>
            <button
              onClick={() => setCounter((prev) => {
                return (prev <= 5) ? prev + step : prev;
              })}
                disabled={counter >= max}
            >
                +
            </button>
        </div>
    );
};
