export function BillTotal({ currentBillCost, tipAmount }) {
    return <h2>You pay ${Number(currentBillCost) + tipAmount} (${Number(currentBillCost)} + ${tipAmount} tip)</h2>
}