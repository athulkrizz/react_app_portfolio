import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './ContactSection.css';

const ContactSection = () => {
    const socialLinks = [
        { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/athulkrishnan-ug' },
        { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/athulkrizz' },
        { name: 'Twitter', icon: <FaXTwitter />, url: 'https://x.com/athulkrizz08' },
        { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/athulkrizz' },
        { name: 'Facebook', icon: <FaFacebook />, url: 'https://www.facebook.com/athulkrishnan-ug' }
    ];

    return (
        <section id="contact" className="contact-section">
            <div className="main-container">
                <div className="container contact-container">
                    <h2 className="contact-heading">contact.</h2>

                    <div className="contact-content">
                        <div className="contact-email">
                            <a href="mailto:athulkrishnan.1108@gmail.com">athulkrishnan.1108@gmail.com</a>
                        </div>

                        <div className="social-links">
                            {socialLinks.map((link) => (
                                <a
                                    target="_blank"
                                    key={link.name}
                                    href={link.url}
                                    className="social-link"
                                    aria-label={link.name}
                                >
                                    {link.icon}
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
