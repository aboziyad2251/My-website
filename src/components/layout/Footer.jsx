import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '30px 0',
            textAlign: 'center',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            color: 'var(--color-steel)',
            fontSize: '0.9rem'
        }}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Mohammad Abotargah. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
