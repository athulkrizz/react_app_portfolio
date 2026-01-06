import './ContactSection.css';

const ContactSection = () => {
    const socialLinks = [
        { name: 'LinkedIn', icon: 'pi-linkedin', url: '#' },
        { name: 'GitHub', icon: 'pi-github', url: '#' },
        { name: 'Twitter', icon: 'pi-twitter', url: '#' },
        { name: 'Instagram', icon: 'pi-instagram', url: '#' }
    ];

    return (
        <section id="contact" className="contact-section">
            <div className="main-container">
                <div className="container contact-container">
                    <h2 className="contact-heading">contact.</h2>

                    <div className="contact-content">
                        <div className="contact-email">
                            <a href="mailto:athul@example.com">athulkrishnan.1108@gmail.com</a>
                        </div>

                        <div className="social-links">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    className="social-link"
                                    aria-label={link.name}
                                >
                                    <i className={`pi ${link.icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
