import { useState } from "react";

export const Counter = () => {
    // положил useState прям тут, потому что сейчас непонятна дальнейшая логика страницы.
    // в дальнейшем, скорее всего, мы будем должны забирать эти значения и что-то с ними делать,
    // и тогда я буду в пропсах получать и сеттер, и сам счётчик
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <button
                onClick={() => setCounter((prev) => {
                    return (prev >= 1) ? prev - 1 : prev;
                })}
            >
                -
            </button>
            <span>{counter}</span>
            <button
                onClick={() => setCounter((prev) => {
                    return (prev <= 4) ? prev + 1 : prev;
                })}
            >
                +
            </button>
        </div>
    );
};
