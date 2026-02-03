import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
    const { t } = useTheme();
    return (
        <footer style={{
            padding: '40px 0',
            textAlign: 'center',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            color: 'var(--color-steel)',
            fontSize: '0.9rem',
            background: 'var(--bg-body)'
        }}>
            <div className="container">

                {/* Contact Info */}
                <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                    <h4 style={{ color: 'var(--text-main)', marginBottom: '10px' }}>{t('footer.contact_us')}</h4>
                    <a href="tel:+966530656998" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-accent)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>📞</span> <span dir="ltr">+966 530 656 998</span>
                    </a>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <a href="https://wa.me/966530656998" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', fontSize: '1.5rem', transition: 'color 0.3s' }} title="WhatsApp">📱</a>
                        <a href="mailto:tarj123@gmail.com" style={{ color: 'var(--text-main)', fontSize: '1.5rem', transition: 'color 0.3s' }} title="Email">✉️</a>
                        <a href="https://www.linkedin.com/in/mohammad-ibrahim-a-abotargah-3a047ab7/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', fontSize: '1.5rem', transition: 'color 0.3s' }} title="LinkedIn">🔗</a>
                    </div>
                </div>

                <p>&copy; {new Date().getFullYear()} Mohammad Abotargah. {t('footer.rights')}</p>
            </div>
        </footer>
    );
};

export default Footer;
