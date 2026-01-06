import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TechStack.css';
import { Divider } from 'primereact/divider';

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
    const containerRef = useRef<HTMLElement>(null);
    const technologies = [
        { name: 'HTML5', icon: 'html5' },
        { name: 'CSS', icon: 'css' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'React', icon: 'react' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'Node.js', icon: 'nodedotjs' },
        { name: 'Git', icon: 'git' },
        { name: 'Figma', icon: 'figma' }
    ];

    useGSAP(() => {
        gsap.from('.tech-item', {
            scrollTrigger: {
                trigger: '.tech-stack',
                start: 'top 100%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 1, // Start from opacity 0 if you want fade in
            scale: 0.8,
            stagger: 0.03,
            duration: 0.2,
            ease: 'back.out(1.7)'
        });
    }, { scope: containerRef });

    return (
        <>
        <section id="skills" className="contact-section" ref={containerRef}>
            <div className="main-container">
                <div className="container contact-container">
                    <h2 className="contact-heading">Skills.</h2>
                    <div className="tech-stack">
                        <div className="container tech-stack-container">
                            {technologies.map((tech) => (
                                <span key={tech.name} className="tech-item">
                                    <img
                                        src={`https://cdn.simpleicons.org/${tech.icon}`}
                                        alt={tech.name}
                                    />
                                    {tech.name}
                                </span>
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

export default TechStack;
