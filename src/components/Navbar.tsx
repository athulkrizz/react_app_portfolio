import './Navbar.css';
import { Toolbar } from 'primereact/toolbar';


const Navbar = () => {

    const navLinks = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Work', href: '#work' },
        { label: 'Contact', href: '#contact' }
    ];

    const socialLinks = [
        { name: 'LinkedIn', icon: 'pi-linkedin', url: 'https://www.linkedin.com/in/athulkrishnan-ug' },
        { name: 'Instagram', icon: 'pi-instagram', url: 'https://www.instagram.com/athulkrizz' },
    ];

    return (
        <nav className="navbar">
            <div>
                <Toolbar style={{ borderRadius: '3rem', padding: '1rem 1rem 1rem 1.5rem' }}>
                    <Toolbar.Start>
                        <div className="navbar-logo">Athul Krishnan</div>
                    </Toolbar.Start>
                    <Toolbar.Center>
                        <div className="navbar-links">
                            {navLinks.map((link) => (
                                <a key={link.label} href={link.href} className="nav-link">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </Toolbar.Center>
                    <Toolbar.End>

                        <div className="social-links">
                            {socialLinks.map((link) => (
                                <a
                                    target="_blank"
                                    key={link.name}
                                    href={link.url}
                                    className="social-link"
                                    aria-label={link.name}
                                >
                                    <i className={`pi ${link.icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </Toolbar.End>
                </Toolbar>
            </div>
        </nav>
    );
};

export default Navbar;
