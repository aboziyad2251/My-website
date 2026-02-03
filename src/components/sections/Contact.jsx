import React from 'react';
import './Contact.css';
import { useTheme } from '../../context/ThemeContext';

const Contact = () => {
    const { t } = useTheme();
    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-content">
                <h2 className="section-title">{t('contact.title')} <span className="text-accent">{t('contact.title_accent')}</span></h2>
                <p className="contact-lead">{t('contact.lead')}</p>

                <div className="contact-details">
                    <div className="detail-item">
                        <span className="detail-label">{t('contact.loc_label')}</span>
                        <span className="detail-value">{t('contact.loc_value')}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">{t('contact.email_label')}</span>
                        <a href="mailto:tarj123@gmail.com" className="detail-value link">tarj123@gmail.com</a>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">{t('contact.link_label')}</span>
                        <a href="https://linkedin.com/in/mohammad-abotargah" target="_blank" rel="noopener noreferrer" className="detail-value link">
                            /in/mohammad-abotargah
                        </a>
                    </div>
                </div>

                <div className="contact-actions">
                    <a href="mailto:tarj123@gmail.com" className="btn btn-fill btn-lg">{t('hero.cta_discuss')}</a>
                    <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">{t('hero.cta_cv')}</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
