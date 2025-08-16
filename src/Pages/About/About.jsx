import React, { useEffect, useRef } from 'react'
import './About.css';
import harshil from '../../assets/harshil.jpg';
import rutvik from '../../assets/rutvik.jpg';
import aryan from '../../assets/aryan.jpg';
import { useNavigate } from 'react-router-dom';
import  Stats  from '../HomePage/Stats/Stats';

const teamMembers = [
  {
    name: "Rutvik Chavada",
    role: "Co-Founder & CEO",
    image: rutvik,
    description: "A visionary leader with expertise in full-stack development and business strategy. Harshil brings innovative thinking and technical excellence to every project, ensuring our solutions drive real business value.",
    skills: ["Full-Stack Development", "Business Strategy", "Project Management", "Team Leadership"],
    experience: "5+ Years",
    education: "Computer Science & Engineering"
  },
  {
    name: "Harshil Kothiya",
    role: "Co-Founder & CTO",
    image: harshil,
    description: "A technology enthusiast and expert in modern web technologies and AI/ML solutions. Rutvik leads our technical initiatives and ensures we stay ahead of industry trends and best practices.",
    skills: ["AI/ML Development", "Web Technologies", "System Architecture", "Innovation"],
    experience: "5+ Years",
    education: "Information Technology"
  },
  {
    name: "Aryan Kothiya",
    role: "Senior Developer",
    image: aryan, // Using existing image as placeholder
    description: "A passionate developer with expertise in modern web technologies and mobile app development. Alex brings creativity and technical skills to deliver exceptional user experiences.",
    skills: ["React Development", "Mobile App Development", "UI/UX Design", "API Integration"],
    experience: "3+ Years",
    education: "Computer Science"
  }
];

const companyValues = [
  {
    title: "Innovation",
    description: "We constantly push boundaries and embrace cutting-edge technologies to deliver solutions that set our clients apart in the digital landscape."
  },
  {
    title: "Excellence",
    description: "Every project we undertake is crafted with meticulous attention to detail, ensuring the highest quality standards and exceptional user experiences."
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and maintain transparent communication with our clients throughout the development process."
  },
  {
    title: "Reliability",
    description: "Our commitment to delivering projects on time, within budget, and exceeding expectations has earned us the trust of our clients."
  }
];



function About() {
  const navigate = useNavigate();
  const observerRef = useRef(null);

  useEffect(() => {
    // Create intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .fade-in-scale');
    animatedElements.forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="about-page">
      {/* about Section */}
      <div className="about-about">
        <div className="about-content">
          <h1 className="about-title fade-in-up">About <span>Us</span></h1>
          <p className="about-subtitle fade-in-up stagger-1">
            We are a passionate team of innovators dedicated to transforming ideas into powerful digital solutions. 
            Our mission is to help businesses thrive in the digital age through cutting-edge technology and creative problem-solving.
          </p>
        </div>
      </div>

      {/* Company Story Section */}
      <div className="story-section">
        <div className="story-container">
            <h2 className="section-title fade-in-up">Our Story</h2>
          
          <div className="story-timeline">
            {/* Timeline Item 1 - Foundation */}
            <div className="timeline-item fade-in-left">
              <div className="timeline-marker">
                <div className="marker-icon">🚀</div>
                {/* <div className="marker-line"></div> */}
              </div>
              <div className="timeline-content">
                <div className="timeline-year">2020</div>
                <h3 className="timeline-title">The Beginning</h3>
                <p className="timeline-description">
                  Founded with a vision to bridge the gap between technology and business success, our startup emerged from the shared passion of two tech enthusiasts who believed in the power of innovative digital solutions.
                </p>
                <div className="timeline-image">
                  <div className="image-placeholder">
                    <span className="placeholder-icon">💡</span>
                    <span className="placeholder-text">Vision & Passion</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 - Growth */}
            <div className="timeline-item fade-in-right">
              <div className="timeline-marker">
                <div className="marker-icon">📈</div>
                <div className="marker-line"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-year">2021-2022</div>
                <h3 className="timeline-title">Building & Growing</h3>
                <p className="timeline-description">
                  What started as a small team working on local projects has grown into a trusted partner for businesses seeking to establish their digital presence and drive growth through technology.
                </p>
                <div className="timeline-image">
                  <div className="image-placeholder">
                    <span className="placeholder-icon">🏗️</span>
                    <span className="placeholder-text">Growth & Development</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 - Today */}
            <div className="timeline-item fade-in-left">
              <div className="timeline-marker">
                <div className="marker-icon">🎯</div>
                <div className="marker-line"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-year">2023-Present</div>
                <h3 className="timeline-title">Leading Innovation</h3>
                <p className="timeline-description">
                  Today, we specialize in creating comprehensive web applications, AI-powered solutions, and data-driven insights that help our clients achieve their goals. Our journey is marked by continuous learning, adaptation to emerging technologies, and an unwavering commitment to delivering exceptional value.
                </p>
                <div className="timeline-image">
                  <div className="image-placeholder">
                    <span className="placeholder-icon">🚀</span>
                    <span className="placeholder-text">Innovation & Excellence</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Vision */}
            <div className="timeline-item fade-in-right">
              <div className="timeline-marker">
                <div className="marker-icon">🌟</div>
                <div className="marker-line"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-year">Future</div>
                <h3 className="timeline-title">Our Vision Ahead</h3>
                <p className="timeline-description">
                  We continue to push boundaries, embracing cutting-edge technologies and expanding our expertise to serve more businesses worldwide. Our commitment to innovation and excellence drives us forward.
                </p>
                <div className="timeline-image">
                  <div className="image-placeholder">
                    <span className="placeholder-icon">🌍</span>
                    <span className="placeholder-text">Global Impact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Story Summary */}
          <div className="story-summary fade-in-up">
            <div className="summary-card">
              <div className="summary-icon">💪</div>
              <h3>What Drives Us</h3>
              <p>Our journey is marked by continuous learning, adaptation to emerging technologies, and an unwavering commitment to delivering exceptional value to our clients.</p>
            </div>
            <div className="summary-card">
              <div className="summary-icon">🎯</div>
              <h3>Our Focus</h3>
              <p>We specialize in creating comprehensive web applications, AI-powered solutions, and data-driven insights that help businesses achieve their goals.</p>
            </div>
            <div className="summary-card">
              <div className="summary-icon">🤝</div>
              <h3>Our Promise</h3>
              <p>To be the trusted technology partner that helps our clients navigate the digital landscape with confidence and achieve their strategic objectives.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <div className="team-container">
          <h2 className="section-title fade-in-up">Meet the Founders</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className={`team-card fade-in-up stagger-${Math.min(index + 1, 6)}`}>
                <div className="member-image-container">
                  <img src={member.image} alt={member.name} className="member-image" />
                  <div className="member-overlay">
                    <div className="member-role">{member.role}</div>
                  </div>
                </div>
                
                <div className="member-content">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-description">{member.description}</p>
                  
                  <div className="member-details">
                    <div className="detail-item">
                      <span className="detail-label">Experience:</span>
                      <span className="detail-value">{member.experience}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Education:</span>
                      <span className="detail-value">{member.education}</span>
                    </div>
                  </div>
                  
                  <div className="member-skills">
                    <h4>Expertise:</h4>
                    <div className="skills-tags">
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="values-section">
        <div className="values-container">
          <h2 className="section-title fade-in-up">Our Values</h2>
          <div className="values-grid">
            {companyValues.map((value, index) => (
              <div key={index} className={`value-card fade-in-up stagger-${Math.min(index + 1, 6)}`}>
                <div className="value-icon">
                  <span className="icon-text">{value.title.charAt(0)}</span>
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="achievements-section">
        <div className="achievements-container">
          <h2 className="section-title fade-in-up">Our Achievements</h2>
          <div className="achievements-grid">
            <Stats/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About