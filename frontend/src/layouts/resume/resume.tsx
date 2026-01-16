import { useEffect, useState } from 'react';
import './styles/resume.css'

function SectionHeader({ title } : { title : String} ) {
    return (
        <h3 className='section-header'>{title}</h3>
    );
}

function ProfileSection() {
    return (
        <section className='profile-section'>
            <div>
                <img src='images/profile-pic.jpg1' alt='profile-pic'></img>
                <h1>Andrei Ciprian Barbuta</h1>
                <h2>SOFTWARE DEVELOPER</h2>
                <span><img src='images/profile-pic.jpg1' alt='location-icon'></img>Bucharest, Romania</span>
            </div>
        </section>
    );
}

type ProfessionalPathEntryType = {
    position: String;
    company: String;
    location: String;
    startDate: String;
    endDate: String;
    description: String;
}
function ProfessionalPathEntry({ position, company, location, startDate, endDate, description } : ProfessionalPathEntryType) {
    return (
        <div className='card-entry'>
            <div className='icon-column'>
                <img src='images/insta-32x32.png' alt='job' />
            </div>
            <div>
                <h3>{position}</h3>
                <p>{company}</p>
                <p>{location}</p>
                <p>{startDate} - {endDate}</p>
                <br></br>
                <p>{description}</p>
            </div>
        </div>
    );
}
function ProfessionalPathSection() {
    return (
        <section className='gray-section'>
            <div className='wrapper'>
                <SectionHeader title={'PROFESSIONAL PATH'} />
                <div className='card'>
                    <ProfessionalPathEntry
                        position={'Cloud Engineer L1 - GCP'}
                        company={'Cognizant Softvision'}
                        location={'Bucharest, Romania'}
                        startDate={'May 2024'}
                        endDate={'September 2025'}
                        description={'Provided advanced technical support on over 200 tickets for Apigee X and Apigee Hybrid platforms across both production and development environments.'}
                        />
                    <ProfessionalPathEntry
                        position={'Frontend Developer Intern'}
                        company={'Accenture Industrial Software Solution SA'}
                        location={'Cluj-Napoca, Romania'}
                        startDate={'August 2022'}
                        endDate={'September 2022'}
                        description={'Demonstrated leadership in the design and development of a secure, Angular-based frontend application for API key management.'}
                        />
                </div>
            </div>
        </section>
    );
}

type EducationEntryType = {
    degree: String,
    institution: String,
    location: String,
    startDate: String;
    endDate: String,
    relevantCoursework: String,
    thesis: String
}
function EducationEntry({ degree, institution, location, startDate, endDate, relevantCoursework, thesis } : EducationEntryType) {
    return (
        <div className='card-entry'>
            <div className='icon-column'>
                <img src='images/insta-32x32.png' alt='job' />
            </div>
            <div>
                <h3>{degree}</h3>
                <p>{institution}</p>
                <p>{location}</p>
                <p>{startDate} - {endDate}</p>
                <br></br>
                <p>{relevantCoursework}</p>
                <p>{thesis}</p>
            </div>
        </div>
    );
}
function EducationSection() {
    return (
        <section>
            <div className='wrapper'>
                <SectionHeader title={'EDUCATIONAL PATH'} />
                <div className='card'>
                    <EducationEntry
                        degree={`Master's Degree in Software Engineering`}
                        institution={'Babes-Bolyai Faculty of Mathematics and Computer Science'}
                        location={'Cluj-Napoca, Romania'}
                        startDate={'October 2023'}
                        endDate={'April 2024'}
                        relevantCoursework={'Relevant coursework: Agile Methodologies, Programming Paradigms.'}
                        thesis={''}
                        />
                    <EducationEntry
                        degree={`Bachelor's Degree in Computer Science`}
                        institution={'Babes-Bolyai Faculty of Mathematics and Computer Science'}
                        location={'Cluj-Napoca, Romania'}
                        startDate={'October 2020'}
                        endDate={'July 2023'}
                        relevantCoursework={'Relevant coursework: Data Structures and Algorithms, OOP, Networking, Web Development, Machine Learning.'}
                        thesis={'Thesis: Tuner and Tab Writer for Guitar Using Note Detection Algorithms.'}
                        />
                </div>
            </div>
        </section>
    );
}


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
function SkillsCategoryDisplay() {
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

export default function Resume() {
    return (
        <main className='resume'>
            <ProfileSection />
            <ProfessionalPathSection />
            <EducationSection />
            <SkillsCategoryDisplay />
        </main>
    );
}