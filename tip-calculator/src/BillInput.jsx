export function BillInput({ children, currentBillCost, onCostChange }) {
    return (
        <>
            <span>{children}</span>
            <input type="text" onChange={(e) => onCostChange(Number(e.target.value))} value={currentBillCost}/>  
        </>
    );
}