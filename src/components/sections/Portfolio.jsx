import React from 'react';
import './Portfolio.css';
import projectGrip from '../../assets/project_grip.png';
import projectPoly from '../../assets/project_poly.png';

const Portfolio = () => {
    return (
        <section id="portfolio" className="section portfolio-section">
            <div className="container">
                <h2 className="section-title">Key <span className="text-accent">Projects</span></h2>

                <div className="project-item">
                    <div className="project-image">
                        <img src={projectGrip} alt="Ethylene Glycol Plant" />
                        <div className="project-overlay"></div>
                    </div>
                    <div className="project-content">
                        <span className="project-role">Safety Lead</span>
                        <h3 className="project-title">Ethylene Glycol GRIP Project</h3>
                        <p className="project-description">
                            Led safety initiatives for a major facility upgrade, ensuring strict compliance with NEBOSH standards.
                        </p>
                        <ul className="project-stats">
                            <li>
                                <span className="stat-value">$20M</span>
                                <span className="stat-label">Savings Delivered</span>
                            </li>
                            <li>
                                <span className="stat-value">15%</span>
                                <span className="stat-label">Cost Reduction</span>
                            </li>
                        </ul>
                        <a href="#contact" className="btn btn-primary btn-sm">View Case Study</a>
                    </div>
                </div>

                <div className="project-item reverse">
                    <div className="project-image">
                        <img src={projectPoly} alt="Polymer Manufacturing Plant" />
                        <div className="project-overlay"></div>
                    </div>
                    <div className="project-content">
                        <span className="project-role">Project Coordinator</span>
                        <h3 className="project-title">Polymer Turnaround</h3>
                        <p className="project-description">
                            Orchestrated a critical $2M turnaround initiative, coordinating cross-functional teams for seamless execution.
                        </p>
                        <ul className="project-stats">
                            <li>
                                <span className="stat-value">-5 Days</span>
                                <span className="stat-label">Ahead of Schedule</span>
                            </li>
                            <li>
                                <span className="stat-value">0</span>
                                <span className="stat-label">Downtime</span>
                            </li>
                        </ul>
                        <a href="#contact" className="btn btn-primary btn-sm">View Case Study</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Portfolio;
