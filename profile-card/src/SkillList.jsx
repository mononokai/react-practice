import { Skill } from "./Skill";

export const SkillList = () => {
    const skills = ['JavaScript', 'TypeScript', 'Python', 'React', 'MySQL'];

    return (
        <div className="skill-list">
            {skills.map(skill => {
                return <Skill key={skill} skill={skill}/>
            })}
        </div>
    )
}