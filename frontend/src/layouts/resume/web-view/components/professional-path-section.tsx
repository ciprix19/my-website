import SectionHeader from "../../components/section-header";

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
export default function ProfessionalPathSection() {
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