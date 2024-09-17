import React from 'react';
import './Resume14.css'; // Updated CSS for enhanced styling
import templateData from './templateData'; // Import JSON data

const ResumeLayout = () => {
    const {
        profileImage,
        firstname,
        lastname,
        profession,
        city,
        country,
        phone,
        email,
        linkedIn,
        GitHub,
        education,
        experience,
        skills,
        certifications,
        languages,
        summary,
        projects,
        declaration,
    } = templateData;

    return (
        <div className='resume-container'>
            <div className="profile14-section">

                <div>
                    <h3>{`${firstname} ${lastname}`}</h3>
                    <p>{`${profession}`}</p>
                </div>
                <div> <img className="profile-image" src={profileImage} alt={`${firstname} ${lastname}`} /></div>
                <div>
                    <p className="location">{`${city}, ${country}`}</p>
                    <p className="contact-info">Phone: {phone}</p>
                    <p className="contact-info">Email: {email}</p>
                    <div className="social-links">
                        <a href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href={GitHub} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>

            </div>
            <hr></hr>
            <div>
                <h3>summary</h3>
                <p>{summary}</p>
                <hr></hr>

            </div>
            <div className='Resume14-detailscontainer'>
                <div className='Resume14-leftcontainer'>
                    {/*education*/}
                    <h2>Education</h2>
                    {education.map((edu) => (
                        <div key={edu.EducationID} className="education-item">
                            <h3>{edu.sclName}</h3>
                            <p>{edu.degree} in {edu.fieldOfStudy} ({edu.gradeYear})</p>
                            <p>{edu.sclLocation}</p>
                        </div>
                    ))}
                    {/*experiences*/}
                    <h2>Experience</h2>
                    {experience.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <h3>{exp.title} at {exp.company}</h3>
                            <p>{exp.location} ({exp.dateRange})</p>
                            <ul>
                                {exp.responsibilities.map((responsibility, idx) => (
                                    <li key={idx}>{responsibility}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <h2>Declaration</h2>
                    <p>{declaration}</p>
                </div>
                <div className='Resume14-rightcontainer'>

                    {/* sills section*/}
                    <h2>Skills</h2>
                    <ul>
                        {skills.map((skill, index) => (
                            <li key={index} className="skill-item">{skill}</li>
                        ))}
                    </ul>

                    {/* certifications section*/}
                    <h2>Certifications</h2>
                    <ul>
                        {certifications.map((cert, index) => (
                            <li key={index}>{cert}</li>
                        ))}
                    </ul>

                    {/* languages*/}
                    <h2>Languages</h2>
                    <ul>
                        {languages.map((language, index) => (
                            <li key={index}>{language}</li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    );
};
export default ResumeLayout;
