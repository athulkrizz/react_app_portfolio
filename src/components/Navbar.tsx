import './Navbar.css';
import { Toolbar } from 'primereact/toolbar';
import { useTheme } from '../context/ThemeContext';


const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

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

                        <div className="social-links" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            {socialLinks.map((link) => (
                                <a
                                    target="_blank"
                                    key={link.name}
                                    href={link.url}
                                    className="social-link"
                                    aria-label={link.name}
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'inherit', textDecoration: 'none' }}
                                >
                                    <i className={`pi ${link.icon}`} style={{ fontSize: '1.2rem' }}></i>
                                </a>
                            ))}
                            <button
                                onClick={toggleTheme}
                                className="social-link"
                                aria-label="Toggle theme"
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: 0,
                                    color: 'inherit',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <i className={`pi ${theme === 'dark' ? 'pi-sun' : 'pi-moon'}`} style={{ fontSize: '1.2rem' }}></i>
                            </button>
                        </div>
                    </Toolbar.End>
                </Toolbar>
            </div>
        </nav>
    );
};

export default Navbar;
