import { useState } from 'react';

export const Counter = () => {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);
    const day = new Date('July 18 2023');
    day.setDate(day.getDate() + count);

    const handleMinusStep = () => {
        setStep((s) => s - 1);
    };

    const handlePlusStep = () => {
        setStep((s) => s + 1);
    };

    const handleMinusCount = () => {
        setCount((c) => c - step);
    };

    const handlePlusCount = () => {
        setCount((c) => c + step);
    };

    return (
        <>
            <div>
                <button onClick={handleMinusStep}>-</button>
                <span>Step: {step}</span>
                <button onClick={handlePlusStep}>+</button>
            </div>
            <div>
                <button onClick={handleMinusCount}>-</button>
                <span>Count: {count}</span>
                <button onClick={handlePlusCount}>+</button>
            </div>
            <div>
                <span>
                    {count === 0
                        ? 'Today is '
                        : count > 0
                        ? `${count} days from today is `
                        : `${Math.abs(count)} days ago was `}
                </span>
                <span>{day.toDateString()}</span>
            </div>
        </>
    );
};
