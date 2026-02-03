import React from 'react';
import './Expertise.css';
import { useTheme } from '../../context/ThemeContext';

const Expertise = () => {
    const { t } = useTheme();
    return (
        <section id="expertise" className="section expertise-section">
            <div className="container">
                <h2 className="section-title fade-in">{t('expertise.title')} <span className="text-accent">{t('expertise.title_accent')}</span></h2>

                <div className="expertise-grid">
                    {/* Card 1: AI */}
                    <div className="expertise-card">
                        <div className="card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                        </div>
                        <h3>{t('expertise.card1_title')}</h3>
                        <p>{t('expertise.card1_text')}</p>
                    </div>

                    {/* Card 2: Strategy */}
                    <div className="expertise-card">
                        <div className="card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        <h3>{t('expertise.card2_title')}</h3>
                        <p>{t('expertise.card2_text')}</p>
                    </div>

                    {/* Card 3: Safety */}
                    <div className="expertise-card">
                        <div className="card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        </div>
                        <h3>{t('expertise.card3_title')}</h3>
                        <p>{t('expertise.card3_text')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertise;
