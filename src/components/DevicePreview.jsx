import React, { useState } from 'react';

const DevicePreview = () => {
    const [viewMode, setViewMode] = useState('desktop'); // 'desktop' | 'mobile'

    const handleViewChange = (mode) => {
        setViewMode(mode);
        const root = document.getElementById('root');
        if (mode === 'mobile') {
            root.style.maxWidth = '375px';
            root.style.margin = '0 auto';
            root.style.border = '1px solid #333';
            root.style.boxShadow = '0 0 50px rgba(0,0,0,0.5)';
            root.style.overflowX = 'hidden';
            // Force mobile layout triggers usually done by media query
            // In real app, we would use an iframe or simply rely on resizing window
            // For this simulation, we constrain the container.
            // Note: Full media query simulation in JS is hard without iframe, 
            // but this gives a visual "preview" of layout constraint.
        } else {
            root.style.maxWidth = '';
            root.style.margin = '';
            root.style.border = '';
            root.style.boxShadow = '';
            root.style.overflowX = '';
        }
    };

    return (
        <div className="device-preview-controls">
            <button
                className={`preview-btn ${viewMode === 'desktop' ? 'active' : ''}`}
                onClick={() => handleViewChange('desktop')}
                title="Desktop View"
            >
                💻
            </button>
            <button
                className={`preview-btn ${viewMode === 'mobile' ? 'active' : ''}`}
                onClick={() => handleViewChange('mobile')}
                title="Mobile View"
            >
                📱
            </button>
        </div>
    );
};

export default DevicePreview;
