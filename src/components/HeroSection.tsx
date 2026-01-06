import { useRef } from 'react';
import { Button } from 'primereact/button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './HeroSection.css';
import ParticleNetwork from './ParticleNetwork';
import { Divider } from 'primereact/divider';

const HeroSection = () => {
    const containerRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Initial setup
        gsap.set('.hero-name', { y: 20, opacity: 0 });
        gsap.set('.hero-title', { opacity: 1 }); // Ensure visible for split
        gsap.set('.hero-resume-button', { y: 20, opacity: 0 });
        gsap.set('.hero-profile-circle', { scale: 0.8, opacity: 0 });
        gsap.set('.line', { scaleY: 0, transformOrigin: 'top' });

        // Animations
        tl.to('.hero-name', {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out'
        })
            .from('.hero-title span', {
                opacity: 0,
                y: 20,
                stagger: 0.05,
                duration: 0.6,
                ease: 'back.out(1.7)'
            }, "-=0.2")
            .to('.hero-resume-button', {
                y: 0,
                opacity: 1,
                duration: 0.3,
                ease: 'back.out(2)'
            }, "-=0.2")
            // .to('.hero-profile-circle', {
            //     scale: 1,
            //     opacity: 1,
            //     duration: 0.5,
            //     ease: 'elastic.out(1, 0.5)'
            // }, "-=0.3")
            // .to('.line', {
            //     scaleY: 1,
            //     duration: 0.6,
            //     stagger: 0.1,
            //     ease: 'power4.inOut'
            // }, "-=0.4");

    }, { scope: containerRef });

    return (
        <>
        <section id="home" className="hero-section" ref={containerRef}>
            <ParticleNetwork particleColor="rgba(45, 45, 45, 0.25)" lineColor="rgba(45, 45, 45)" />
            <div className="main-container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="container hero-container">
                    <div className="hero-content">
                        <div>
                            <div className="hero-name">
                                Hi, I'm Athul Krishnan UG,
                            </div>
                            <h1 className="hero-title" ref={titleRef}>
                                {/* Split text for animation granular control if needed, passing spans manually since we don't have SplitText plugin */}
                                <span style={{ display: 'inline-block' }}>Software</span><br />
                                <span style={{ display: 'inline-block' }}>Developer</span>
                            </h1>
                        </div>

                        <Button
                            label="RESUME   "
                            className="hero-resume-button"
                            onClick={() => window.open('/resume.pdf', '_blank')}
                        >
                            <div>Resume</div>
                        </Button>
                    </div>

                    {/* <div className="hero-image-container">
                        <div className="hero-decorative-lines">
                            <div className="line line-1"></div>
                            <div className="line line-2"></div>
                            <div className="line line-3"></div>
                        </div>

                        <div className="hero-profile-circle">
                            <div className="profile-placeholder">
                                <i className="pi pi-user"></i>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        <Divider />
        </>
    );
};

export default HeroSection;