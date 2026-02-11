import React from 'react';

const EducationCard = () => {
    const containerStyle = {
        width: '100%',
        maxWidth: '960px',
        padding: '0 24px',
        boxSizing: 'border-box',
    };

    const cardStyle = {
        background: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(18px)',
        borderRadius: '18px',
        padding: '24px',
        color: 'white',
        border: '1px solid rgba(148, 163, 184, 0.5)',
        width: '100%',
        marginBottom: '20px',
        boxShadow: '0 18px 40px rgba(15, 23, 42, 0.8)',
    };

    const sectionStyle = {
        marginBottom: '15px'
    };

    const titleStyle = {
        fontSize: '1.1rem',
        fontWeight: 'bold',
        marginBottom: '5px'
    };

    const subTitleStyle = {
        fontSize: '0.9rem',
        opacity: 0.8
    };

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h2 style={{ borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '10px', marginBottom: '15px' }}>Education</h2>
                <div style={sectionStyle}>
                    <p style={titleStyle}>Bachelor of Technology in CSE</p>
                    <p style={subTitleStyle}>Ramdeobaba College of Engineering and Management</p>
                    <p style={subTitleStyle}>CGPA: 8.73 | 2020-2024</p>
                </div>
                <div style={sectionStyle}>
                    <p style={titleStyle}>HSC</p>
                    <p style={subTitleStyle}>K. M. Agrawal College</p>
                    <p style={subTitleStyle}>Percentage: 81.69% | 2020</p>
                </div>
                <div style={sectionStyle}>
                    <p style={titleStyle}>SSC</p>
                    <p style={subTitleStyle}>Lok Kalyan Public School</p>
                    <p style={subTitleStyle}>Percentage: 87% | 2018</p>
                </div>
            </div>
        </div>
    )
}

export default EducationCard