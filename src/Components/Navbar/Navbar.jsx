import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faInstagram, faSquareTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Footer from "../Footer/Footer";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change or window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMenuToggle = () => setMenuOpen(prev => !prev);
    const handleMenuClose = () => setMenuOpen(false);

    const scrollToAbout = (e) => {
        e.preventDefault();
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    const navigate = useNavigate()

    return (
        <>
            <div className={`nav ${isScrolled ? 'scrolled' : ''}`}>
                <div className="bottomside">
                    <div className="brand" onClick={() => navigate('/')}>DataLync</div>
                    <button className="hamburger" onClick={handleMenuToggle} aria-label="Toggle menu">
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                    </button>
                    <div className={`menu${menuOpen ? ' open' : ''}`}>
                        <ul onClick={handleMenuClose}>
                            <li>
                                <Link
                                    to="/"
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className={location.pathname === "/" ? "active" : ""}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="dropdown">
                                <Link
                                    to="/services"
                                    className={location.pathname === "/services" ? "active" : ""}
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/portfolio"
                                    className={location.pathname === "/portfolio" ? "active" : ""}
                                >
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className={location.pathname === "/about" ? "active" : ""}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <a
                                    id="contact"
                                    onClick={() => {
                                        const footer = document.querySelector('.footer');
                                        if (footer) {
                                            footer.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="contact-link"
                                >
                                    Get Started
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="outlet"> {/* Adjust top margin to match navbar height */}
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Navbar;