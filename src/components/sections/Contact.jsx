import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-content">
                <h2 className="section-title">Ready to <span className="text-accent">Optimize?</span></h2>
                <p className="contact-lead">
                    Let's discuss how we can leverage AI and data-driven strategies to enhance your operational efficiency.
                </p>

                <div className="contact-details">
                    <div className="detail-item">
                        <span className="detail-label">Location</span>
                        <span className="detail-value">Jeddah, Saudi Arabia</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Email</span>
                        <a href="mailto:tarj123@gmail.com" className="detail-value link">tarj123@gmail.com</a>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">LinkedIn</span>
                        <a href="https://linkedin.com/in/mohammad-abotargah" target="_blank" rel="noopener noreferrer" className="detail-value link">
                            /in/mohammad-abotargah
                        </a>
                    </div>
                </div>

                <div className="contact-actions">
                    <a href="mailto:tarj123@gmail.com" className="btn btn-fill btn-lg">Discuss a Project</a>
                    <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">Download Full CV</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
