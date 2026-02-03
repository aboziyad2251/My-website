import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container about-container">
                <div className="about-content">
                    <h2 className="section-title">About <span className="text-accent">Me</span></h2>
                    <div className="about-text">
                        <p className="lead">
                            With over 15 years of boots-on-the-ground experience at SABIC, I have evolved from mastering complex industrial processes to leading the next wave of operational efficiency: AI Integration:
                        </p>
                        <p>
                            My career is defined by a unique fusion of <strong>PMP-certified project management</strong> and a deep-seated passion for <strong>Generative AI</strong>. Whether I am coordinating a $20M plant upgrade or mentoring the next generation of operators, my focus remains constant: leveraging data to drive safety, reduce costs, and foster a culture of continuous improvement.
                        </p>
                    </div>

                    <div className="about-highlights">
                        <div className="highlight-box">
                            <h3>Education</h3>
                            <p>Bachelor of Project Management<br /><span className="text-muted">Midocean University (Expected 2026)</span></p>
                        </div>
                        <div className="highlight-box">
                            <h3>Dual-Competency</h3>
                            <p>Technical Expertise (DCS Extrusion) + <br />High-Level Leadership (TOT Certified)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
