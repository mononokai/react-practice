export function SelectPercentage({ children, currentPercent, onPercentChange }) {
    return (
        <div>
            <span>{children}</span>
            <select>
                <option value="0">Dissatisfied (0%)</option>
                <option value="0">It was okay (5%)</option>
                <option value="0">It was good (10%)</option>
                <option value="0">Absolutely amazing! (20%)</option>
            </select>
        </div>
    )
}