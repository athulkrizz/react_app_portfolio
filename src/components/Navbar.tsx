import { useState } from 'react';
// import { Button } from 'primereact/button';
import './Navbar.css';
import { Avatar } from 'primereact/avatar';
import { Toolbar } from 'primereact/toolbar';


const Navbar = () => {
    const [visible, setVisible] = useState(false);

    const navLinks = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Work', href: '#work' },
        { label: 'Contact', href: '#contact' }
    ];

    return (
        <nav className="navbar">
            {/* <div className="container navbar-container">
                <a href="/" className="navbar-logo">
                    Athul Krishnan
                </a>

                <div className="navbar-links">
                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href} className="nav-link">
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="mobile-menu-toggle">
                    <Button icon="pi pi-bars" text onClick={() => setVisible(true)} />
                </div>

                {visible && (
                    <>
                        <div className="mobile-sidebar">
                            <div className="mobile-sidebar-close">
                                <Button icon="pi pi-times" text onClick={() => setVisible(false)} />
                            </div>
                            {navLinks.map((link) => (
                                <a key={link.label} href={link.href} onClick={() => setVisible(false)} className="mobile-nav-link">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        <div onClick={() => setVisible(false)} className="mobile-overlay"></div>
                    </>
                )}
            </div> */}

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
                        <div>
                            <Avatar shape="circle">
                                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                                <Avatar.Fallback>A</Avatar.Fallback>
                            </Avatar>
                        </div>
                    </Toolbar.End>
                </Toolbar>
            </div>
        </nav>
    );
};

export default Navbar;
