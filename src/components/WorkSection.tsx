import { Divider } from 'primereact/divider';
import gameNationImg from '../assets/game-nation.png';
import halLogo from '../assets/halliburton-logo.png';
import portfolioImg from '../assets/portfolio-app.png';
import ssLogo from '../assets/ss-logo.png';
import './WorkSection.css';

const WorkSection = () => {
    const projects = [
        { id: 1, title: 'Game Nation', category: 'React Project', image: gameNationImg },
        { id: 2, title: 'QAQC', category: 'Halliburton Project', image: halLogo },
        { id: 3, title: 'DWO', category: 'Halliburton Project (Angular)', image: halLogo },
        { id: 4, title: 'DrillView', category: 'ShellSquare Project (Vue)', image: ssLogo },
        { id: 5, title: 'Portfolio App', category: 'React Project', image: portfolioImg },
        { id: 6, title: 'DWP', category: 'Halliburton Landmark Project', image: halLogo }
    ];

    return (
        <>
            <section id="work" className="work-section">
                <div className="main-container">
                    <div className="container work-container">
                        <h2 className="work-heading">work.</h2>

                        <div className="projects-grid">
                            {projects.map((project) => (
                                <div key={project.id} className="project-card">
                                    <div className="project-image">
                                        <img src={project.image} alt={project.title} className="work-img" />
                                    </div>
                                    <div className="project-info">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-category">{project.category}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Divider />
        </>
    );
};

export default WorkSection;
