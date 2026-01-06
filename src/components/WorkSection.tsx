import { Divider } from 'primereact/divider';
import './WorkSection.css';

const WorkSection = () => {
    const projects = [
        { id: 1, title: 'E-Commerce Platform', category: 'Web Development' },
        { id: 2, title: 'Mobile Banking App', category: 'Mobile Development' },
        { id: 3, title: 'Portfolio Website', category: 'Web Design' },
        { id: 4, title: 'Task Management Tool', category: 'Full Stack' },
        { id: 5, title: 'Social Media Dashboard', category: 'Frontend' },
        { id: 6, title: 'API Integration Service', category: 'Backend' }
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
                                    <div className="project-placeholder">
                                        <i className="pi pi-image"></i>
                                    </div>
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
