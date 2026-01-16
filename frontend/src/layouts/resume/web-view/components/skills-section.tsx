import { useState } from "react";
import SectionHeader from "../../components/section-header";
import './styles/skills-section.css'

type SkillEntryType = {
    skillName: String,
    info: String
}

// todo: drag and drop elements in the div
const skillsCategories : Record<string, string[]> = {
    'Backend and Scripting': ['Express.js', 'C++', 'Java', 'C#', 'Python'],
    'Frontend Technologies': ['Javascript', 'Typescript', 'React', 'Next.js', 'HTML', 'CSS', 'Angular'],
    'Databases': ['SQLite', 'PostegreSQL'],
    'Cloud and API': ['Google Cloud Platform', 'Apigee X', 'Apigee Hybrid', 'Kubernetes', 'Docker'],
    'Tools': ['Git', 'Linux']
};

function SkillsEntry({ skillName, info } : SkillEntryType) {
    return (
        <div className='card-simple'>{skillName}</div>
    );
}

function SkillsForCategory({ category } : { category: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='card-extend'>
            <div>
                <h3>{category}</h3>
                <div className={`skills ${isOpen ? 'active' : ''}`}>
                    {skillsCategories[category].map(skill => {
                        return (<SkillsEntry key={skill} skillName={skill} info={''}></SkillsEntry>)
                    })}
                </div>
            </div>
            <button className='extend-button' onClick={() => setIsOpen(!isOpen)}>{isOpen ? '˄' : '˅'}</button>
        </div>
    );
}

export default function SkillsCategoryDisplay() {
    return (
        <section className='gray-section'>
            <div className='wrapper'>
                <SectionHeader title={'CORE ARSENAL'} />
                <div className='skills-category-section'>
                    {Object.keys(skillsCategories).map(category => {
                        return (<SkillsForCategory key={category} category={category}/>);
                    })}
                </div>
            </div>
        </section>
    );
}
