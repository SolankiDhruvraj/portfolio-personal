import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div style={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingBottom: '50px',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            pointerEvents: 'none'
        }}>
            <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(5px)',
                padding: '10px 20px',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                animation: 'bounce 2s infinite'
            }}>
                <p style={{ margin: 0, fontSize: '1.2rem' }}>↓ Scroll to explore the portfolio</p>
            </div>
            <style>
                {`
                    @keyframes bounce {
                        0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
                        40% {transform: translateY(-10px);}
                        60% {transform: translateY(-5px);}
                    }
                `}
            </style>
        </div>
    )
}

export default Home
