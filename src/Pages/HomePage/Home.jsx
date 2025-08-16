import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faRocket, faLightbulb, faChartLine, faBrain, faChartBar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Home_4 from "../Home_4/Home_4";
import Stats from "./Stats/Stats";
import Home_5 from "../Page_5/Page_5";
import Testimonials from "../Testimonials/Testimonials";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()
    return (
        <>
            <section className="hero-section">
                {/* Animated background elements behind the blur */}
                <div className="animated-background">
                    <div className="animated-shape"></div>
                    <div className="animated-shape"></div>
                    <div className="animated-shape"></div>
                    <div className="animated-shape"></div>
                    <div className="animated-shape"></div>
                    <div className="animated-shape"></div>
                    <div className="geometric-shape"></div>
                    <div className="geometric-shape"></div>
                    <div className="geometric-shape"></div>
                </div>
                
                <div className="floating-icon left">
                    <FontAwesomeIcon icon={faBrain} />
                </div>
                <div className="floating-icon right">
                    <FontAwesomeIcon icon={faChartBar} />
                </div>
                <div className="blur-blob left"></div>
                <div className="blur-blob right"></div>
                <div className="hero-inner">
                    <span className="hero-badge">🚀 AI-Powered Solutions</span>
                    <h1 className="hero-title">Transform Your Data Into Intelligence</h1>
                    <p className="hero-subtitle">We specialize in AI/ML, data science, analytics, and modern web development. Turn your data into competitive advantage with our cutting-edge solutions.</p>
                    <div className="hero-actions">
                        <button className="primary-btn" onClick={() => {
                            const footer = document.querySelector('.footer');
                            if (footer) {
                                footer.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}>
                            <span>Start Your Project</span>
                            <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '10px' }} />
                        </button>
                        <button className="secondary-btn" onClick={() => { window.scrollTo(0,0); navigate('/portfolio'); }}>View Portfolio</button>
                    </div>
                </div>
            </section>

            <Stats />
            
            <div className="Home_4">
                <Home_4 />
            </div>
            <div className="Home_5">
                <Home_5 />
            </div>
            <Testimonials />
            
        </>
    );
}

export default Home;

