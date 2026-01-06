import { Divider } from 'primereact/divider';
import './AboutServices.css';

const AboutServices = () => {
    const experiences = [
        { years: '2022 - 2022', role: 'Intern', company: 'ShellSquare Softwares' },
        { years: '2022 - 2024', role: 'Junior Software Developer', company: 'ShellSquare Softwares' },
        { years: '2024 - Present', role: 'Software Developer', company: 'ShellSquare Softwares' },
    ];

    return (
        <>
        <section id="about" className="about-section">
            <div className="main-container">
                <div className="container about-container">
                    <h2 className="about-heading">about.</h2>

                    <div className="about-content">
                        <div className="about-bio">
                            <span>
                                Frontend Developer with 3 years of experience building scalable, high-performance web applications in Angular, React, and Vue.
                                Proven track record of delivering production-ready solutions for enterprise clients in the oil & gas sector, including Halliburton and
                                Exebenus. Skilled at transforming manual, time-intensive workflows into efficient digital platforms that improve data quality,
                                accelerate operations, and enhance user experience. Adept at working across the full development lifecycle—from requirements
                                gathering to deployment—while collaborating with cross-functional teams in Agile environments. Passionate about crafting clean,
                                maintainable code and leveraging modern JavaScript frameworks to solve complex business challenges.

                            </span>
                        </div>

                        <div className="about-timeline">
                            <h3 className="timeline-heading">Experience</h3>
                            {experiences.map((exp, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-years">{exp.years}</div>
                                    <div className="timeline-details">
                                        <div className="timeline-role">{exp.role}</div>
                                        <div className="timeline-company">{exp.company}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Divider />
        </>
    );
};

export default AboutServices;
