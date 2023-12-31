import { useState } from 'react';

export const Counter = () => {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);
    const day = new Date('July 18 2023');
    day.setDate(day.getDate() + count);

    // const handleMinusStep = () => {
    //     setStep((s) => s - 1);
    // };

    // const handlePlusStep = () => {
    //     setStep((s) => s + 1);
    // };

    const handleMinusCount = () => {
        setCount((c) => c - step);
        console.log(`minus count: ${count}, step: ${step}`)
    };

    const handlePlusCount = () => {
        setCount((c) => c + step);
        console.log(`plus count: ${count}, step: ${step}`)
    };

    const handleRange = (e) => {
        setStep(Number(e.target.value));
    }

    const handleInput = (e) => {
        setCount(Number(e.target.value));
    }

    const handleReset = () => {
        setStep(1);
        setCount(0);
    }

    return (
        <>
            <div>
                <input type="range" min='1' max='10' value={step} onChange={e => handleRange(e)}/>
                <span>Step: {step}</span>
            </div>
            <div>
                <button onClick={handleMinusCount}>-</button>
                <input type="number" onChange={handleInput} value={count} />
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
            {(count === 0 || step === 1) ? "" : <button onClick={handleReset}>Reset</button>}  
        </>
    );
};
