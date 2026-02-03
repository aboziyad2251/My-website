import React from 'react';
import './Portfolio.css';
import projectGrip from '../../assets/project_grip.png';
import projectPoly from '../../assets/project_poly.png';
import { useTheme } from '../../context/ThemeContext';

const Portfolio = () => {
    const { t } = useTheme();
    return (
        <section id="portfolio" className="section portfolio-section">
            <div className="container">
                <h2 className="section-title">{t('projects.title')} <span className="text-accent">{t('projects.title_accent')}</span></h2>

                <div className="project-item">
                    <div className="project-image">
                        <img src={projectGrip} alt="Ethylene Glycol Plant" />
                        <div className="project-overlay"></div>
                    </div>
                    <div className="project-content">
                        <span className="project-role">{t('projects.p1_role')}</span>
                        <h3 className="project-title">{t('projects.p1_title')}</h3>
                        <p className="project-description">{t('projects.p1_desc')}</p>
                        <ul className="project-stats">
                            <li>
                                <span className="stat-value">$20M</span>
                                <span className="stat-label">{t('projects.p1_stat1_label')}</span>
                            </li>
                            <li>
                                <span className="stat-value">15%</span>
                                <span className="stat-label">{t('projects.p1_stat2_label')}</span>
                            </li>
                        </ul>
                        <a href="#contact" className="btn btn-primary btn-sm">{t('projects.view_case')}</a>
                    </div>
                </div>

                <div className="project-item reverse">
                    <div className="project-image">
                        <img src={projectPoly} alt="Polymer Manufacturing Plant" />
                        <div className="project-overlay"></div>
                    </div>
                    <div className="project-content">
                        <span className="project-role">{t('projects.p2_role')}</span>
                        <h3 className="project-title">{t('projects.p2_title')}</h3>
                        <p className="project-description">{t('projects.p2_desc')}</p>
                        <ul className="project-stats">
                            <li>
                                <span className="stat-value">-5 Days</span>
                                <span className="stat-label">{t('projects.p2_stat1_label')}</span>
                            </li>
                            <li>
                                <span className="stat-value">0</span>
                                <span className="stat-label">{t('projects.p2_stat2_label')}</span>
                            </li>
                        </ul>
                        <a href="#contact" className="btn btn-primary btn-sm">{t('projects.view_case')}</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Portfolio;
