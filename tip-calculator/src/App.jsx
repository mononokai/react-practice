import { useState } from "react";
import { BillInput } from "./BillInput";
import { SelectPercentage } from "./SelectPercentage";
import { BillTotal } from "./BillTotal";
import { Reset } from "./Reset";

export default function App() {
    const [billCost, setBillCost] = useState('')
    const [percentageA, setPercentageA] = useState(0)
    const [percentageB, setPercentageB] = useState(0)
    const tipAmount = Math.round(Number(billCost) * (((percentageA / 100) + (percentageB / 100) / 2)));

    function handleReset() {
        setBillCost('');
        setPercentageA(0);
        setPercentageB(0);
    }

    return (
        <div>
            <BillInput currentBillCost={billCost} onCostChange={setBillCost}>How much was the bill?</BillInput>
            <SelectPercentage currentPercent={percentageA} onPercentChange={setPercentageA}>How did you like the service?</SelectPercentage>
            <SelectPercentage currentPercent={percentageB} onPercentChange={setPercentageB}>How did your friend like the service?</SelectPercentage>

            <BillTotal currentBillCost={billCost} tipAmount={tipAmount} />
            <Reset onReset={handleReset} />
        </div>
    );
}