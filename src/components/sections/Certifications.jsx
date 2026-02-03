import React from 'react';
import './Certifications.css';
import { useTheme } from '../../context/ThemeContext';

const Certifications = () => {
    const { t } = useTheme();
    return (
        <section id="certifications" className="section certifications-section">
            <div className="container">
                <h2 className="section-title">{t('certifications.title')} <span className="text-accent">{t('certifications.title_accent')}</span></h2>

                {/* Education Highlight */}
                <div className="education-card fade-in">
                    <div className="edu-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                    </div>
                    <div className="edu-content">
                        <h3 className="edu-degree">{t('certifications.edu_degree')}</h3>
                        <p className="edu-school">{t('certifications.edu_school')}</p>
                        <span className="edu-date">{t('certifications.edu_date')}</span>
                    </div>
                    <div className="edu-badge">{t('certifications.in_progress')}</div>
                </div>

                {/* Certifications Grid */}
                <div className="cert-grid">

                    {/* AI & Technology */}
                    <div className="cert-category">
                        <div className="category-header">
                            <div className="cat-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                            </div>
                            <h3>{t('certifications.cat_ai')}</h3>
                        </div>
                        <ul className="cert-list">
                            <li>
                                <strong>Generative AI for Project Managers</strong> <br />
                                <span className="cert-issuer">IBM (3-Course Series)</span>
                            </li>
                            <li>
                                <strong>Fundamentals of AI & Advanced Applications</strong> <br />
                                <span className="cert-issuer">SDAIA</span>
                            </li>
                        </ul>
                    </div>

                    {/* Project Management */}
                    <div className="cert-category">
                        <div className="category-header">
                            <div className="cat-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                            </div>
                            <h3>{t('certifications.cat_pm')}</h3>
                        </div>
                        <ul className="cert-list">
                            <li>
                                <strong>PMP (Project Management Professional)</strong> <br />
                                <span className="cert-issuer">Project Management Institute (PMI)</span>
                            </li>
                            <li>
                                <strong>Google Project Management Professional</strong> <br />
                                <span className="cert-issuer">Google</span>
                            </li>
                            <li>
                                <strong>Critical Thinking for Better Judgment</strong> <br />
                                <span className="cert-issuer">PMI</span>
                            </li>
                            <li>
                                <strong>Project Management Track (21 hours)</strong> <br />
                                <span className="cert-issuer">Doroob Program</span>
                            </li>
                        </ul>
                    </div>

                    {/* Leadership */}
                    <div className="cert-category">
                        <div className="category-header">
                            <div className="cat-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </div>
                            <h3>{t('certifications.cat_lead')}</h3>
                        </div>
                        <ul className="cert-list">
                            <li>
                                <strong>TOT (Train of Trainers)</strong> <br />
                                <span className="cert-issuer">Certified</span>
                            </li>
                            <li>
                                <strong>Leading Teams: Developing as a Leader</strong> <br />
                                <span className="cert-issuer">Coursera</span>
                            </li>
                            <li>
                                <strong>Mastering Communications as a Leader</strong> <br />
                                <span className="cert-issuer">LinkedIn</span>
                            </li>
                            <li>
                                <strong>Operational Planning & CRM</strong> <br />
                                <span className="cert-issuer">Monshaat Academy</span>
                            </li>
                        </ul>
                    </div>

                    {/* Safety & Supply Chain */}
                    <div className="cert-category">
                        <div className="category-header">
                            <div className="cat-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            </div>
                            <h3>{t('certifications.cat_safe')}</h3>
                        </div>
                        <ul className="cert-list">
                            <li>
                                <strong>NEBOSH Health & Safety Management</strong> <br />
                                <span className="cert-issuer">NEBOSH</span>
                            </li>
                            <li>
                                <strong>SHEMS Diploma</strong> <br />
                                <span className="cert-issuer">SABIC</span>
                            </li>
                            <li>
                                <strong>Supply Chain Management</strong> <br />
                                <span className="cert-issuer">Rutgers University</span>
                            </li>
                            <li>
                                <strong>SFTC Fire and Rescue Training</strong> <br />
                                <span className="cert-issuer">SABIC (7-Course Series)</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Certifications;
