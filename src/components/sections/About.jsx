import React from 'react';
import './About.css';
import { useTheme } from '../../context/ThemeContext';

const About = () => {
    const { t } = useTheme();
    return (
        <section id="about" className="section about-section">
            <div className="container about-container">
                <div className="about-content">
                    <h2 className="section-title">{t('about.title')} <span className="text-accent">{t('about.title_accent')}</span></h2>
                    <div className="about-text">
                        <p className="lead">{t('about.lead')}</p>
                        <p>{t('about.text')}</p>
                    </div>

                    <div className="about-highlights">
                        <div className="highlight-box">
                            <h3>{t('about.box1_title')}</h3>
                            <p>{t('about.box1_text')}<br /><span className="text-muted">{t('certifications.edu_school')}</span></p>
                        </div>
                        <div className="highlight-box">
                            <h3>{t('about.box2_title')}</h3>
                            <p>{t('about.box2_text')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
