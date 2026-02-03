import React from 'react';
import './Hero.css';
import heroBg from '../../assets/hero_bg.png';
import { useTheme } from '../../context/ThemeContext';

const Hero = () => {
    const { t, lang } = useTheme();

    return (
        <section id="hero" className="hero-section">
            <div className="hero-background" style={{ backgroundImage: `url(${heroBg})` }}></div>
            <div className="hero-overlay"></div>

            <div className="container hero-content">
                <div className="hero-text fade-in">
                    <h1 className="hero-name">Mohammad <span className="text-accent">Abotargah</span></h1>
                    <h2 className="hero-title">{t('hero.title')}</h2>
                    <p className="hero-tagline">{t('hero.tagline')}</p>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-value text-accent">15+</span>
                            <span className="stat-label">{t('hero.years')}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value text-accent">$1M</span>
                            <span className="stat-label">{t('hero.savings')}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value text-accent">AI</span>
                            <span className="stat-label">{t('hero.role')}</span>
                        </div>
                    </div>

                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary">{t('hero.cta_discuss')}</a>
                        <a href={`/resume_${lang}.html`} target="_blank" rel="noopener noreferrer" className="btn btn-fill">{t('hero.cta_cv')}</a>
                    </div>
                </div>
            </div>

            <div className="trust-bar">
                <div className="container trust-content">
                    <span className="trust-label">{t('hero.trust')}</span>
                    <div className="trust-logos">
                        <div className="trust-item">PMP®</div>
                        <div className="trust-item">NEBOSH</div>
                        <div className="trust-item">SDAIA</div>
                        <div className="trust-item">IBM AI</div>
                        <div className="trust-item">Google PM</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
