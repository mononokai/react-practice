import { Skill } from './Skill';

const skills = [
    {
        skill: 'JavaScript',
        level: 'intermediate',
        color: '#d6c13b',
    },
    { 
        skill: 'Python', 
        level: 'intermediate', 
        color: '#4383b4' },
    {
        skill: 'HTML/CSS',
        level: 'advanced',
        color: '#fc4f13',
    },
    {
        skill: 'TypeScript',
        level: 'beginner',
        color: '#589be3',
    },
    {
        skill: 'React',
        level: 'beginner',
        color: '#07c6e8',
    },
    {
        skill: 'MySQL',
        level: 'intermediate',
        color: '#e59208',
    },
];

export const SkillList = () => {
    // const skills = ['JavaScript', 'TypeScript', 'Python', 'React', 'MySQL'];

    return (
        <ul className="skill-list">
            {skills.map((skill) => {
                return (
                    <Skill
                        key={skill.skill}
                        skill={skill.skill}
                        level={skill.level}
                        color={skill.color}
                    />
                );
            })}
        </ul>
    );
};
