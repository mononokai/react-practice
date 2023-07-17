export const Skill = ({ skill, level, color }) => {
    return (
        <li style={{ backgroundColor: color }} className="skill">
            <span>{skill}</span>
            <span>
                {level === "beginner" && "👶"}
                {level === "intermediate" && "👍"}
                {level === "advanced" && "💪"}
            </span>
        </li>
    )
}