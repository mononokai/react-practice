export function SelectPercentage({ children, currentPercent, onPercentChange }) {
    return (
        <div>
            <span>{children}</span>
            <select onChange={(e) => onPercentChange(e.target.value)} value={currentPercent}>
                <option value="0">Dissatisfied (0%)</option>
                <option value="5">It was okay (5%)</option>
                <option value="10">It was good (10%)</option>
                <option value="20">Absolutely amazing! (20%)</option>
            </select>
        </div>
    )
}