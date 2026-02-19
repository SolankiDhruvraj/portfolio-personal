import React, { useState, useEffect } from 'react'
import { apiUrl } from '../config/api.js'
import axios from 'axios'

const ProjectCard = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchProjects = async () => {
        try {
            const response = await fetch(apiUrl('/api/project/get-projects'))
            const data = await response.json()
            if (data.projects && data.projects.length > 0) {
                setProjects(data.projects)
            } else {
                console.log("No projects found or empty array");
                setProjects([]); // Ensure generic handling
            }
        } catch (error) {
            console.error("Error fetching projects:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    const containerStyle = {
        width: '100%',
        maxWidth: '960px',
        padding: '0 24px',
        boxSizing: 'border-box',
    }

    const headingStyle = {
        fontSize: '2rem',
        fontWeight: '700',
        color: 'white',
        marginBottom: '16px',
        textAlign: 'left',
    }

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px',
        width: '100%',
    }

    const cardStyle = {
        background: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(18px)',
        borderRadius: '18px',
        padding: '20px',
        color: 'white',
        border: '1px solid rgba(148, 163, 184, 0.5)',
        boxShadow: '0 18px 40px rgba(15, 23, 42, 0.8)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
    }

    if (loading) {
        return (
            <div style={containerStyle}>
                <h2 style={headingStyle}>Projects</h2>
                <div style={{ ...cardStyle, alignItems: 'center', justifyContent: 'center', minHeight: '200px' }}>
                    <p style={{ color: 'rgba(226, 232, 240, 0.85)', fontSize: '1.2rem' }}>Loading projects...</p>
                </div>
            </div>
        )
    }

    if (projects.length === 0) {
        return (
            <div style={containerStyle}>
                <div style={cardStyle}>
                    <h2 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>Projects</h2>
                    <p style={{ color: 'rgba(226, 232, 240, 0.85)' }}>
                        No projects found. Please check your backend connection or add some projects to showcase your work.
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>Projects</h2>
            <div style={gridStyle}>
                {projects.map((project) => (
                    <div key={project._id} style={cardStyle}>
                        {project.image && (
                            <img
                                src={project.image}
                                alt={project.title}
                                style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '12px', marginBottom: '15px' }}
                            />
                        )}
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>{project.title}</h3>
                        <p style={{ color: 'rgba(226, 232, 240, 0.85)', marginBottom: '15px', flexGrow: 1 }}>{project.description}</p>
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-block',
                                    padding: '10px 20px',
                                    background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                                    color: 'white',
                                    textDecoration: 'none',
                                    borderRadius: '999px',
                                    textAlign: 'center',
                                    fontWeight: '600',
                                    fontSize: '0.95rem',
                                }}
                            >
                                View Project
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectCard