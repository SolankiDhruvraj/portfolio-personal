import React, { useEffect, useState } from "react"
import axios from "axios"
import { apiUrl } from "../config/api.js"

const ProjectUpdate = () => {
    const [projects, setProjects] = useState([])
    const [editingId, setEditingId] = useState(null)
    const [editForm, setEditForm] = useState({
        title: "",
        description: "",
        image: "",
        link: ""
    })

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(apiUrl("/api/project/get-projects"))
                if (response.data && response.data.projects) {
                    setProjects(response.data.projects)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchProjects()
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete(apiUrl(`/api/project/delete-project/${id}`))
            setProjects(projects.filter((project) => project._id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const handleEditClick = (project) => {
        setEditingId(project._id)
        setEditForm({
            title: project.title,
            description: project.description,
            image: project.image || "",
            link: project.link || ""
        })
    }

    const handleCancelEdit = () => {
        setEditingId(null)
        setEditForm({ title: "", description: "", image: "", link: "" })
    }

    const handleInputChange = (e) => {
        setEditForm({
            ...editForm,
            [e.target.name]: e.target.value
        })
    }

    const handleUpdateSubmit = async (id) => {
        try {
            await axios.put(apiUrl(`/api/project/update-project/${id}`), editForm)

            // Update the local state with the new data
            const updatedProjects = projects.map(project =>
                project._id === id ? { ...project, ...editForm } : project
            )
            setProjects(updatedProjects)
            setEditingId(null)
        } catch (error) {
            console.log(error)
            alert("Failed to update project")
        }
    }

    const pageStyle = {
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "40px 20px",
        boxSizing: "border-box",
    };

    const containerStyle = {
        width: "100%",
        maxWidth: "900px",
        color: "white",
    };

    const cardStyle = {
        background: "rgba(15, 23, 42, 0.85)",
        backdropFilter: "blur(18px)",
        borderRadius: "18px",
        padding: "20px",
        marginBottom: "20px",
        border: "1px solid rgba(148, 163, 184, 0.5)",
        boxShadow: "0 18px 40px rgba(15, 23, 42, 0.8)",
    };

    const inputStyle = {
        width: "100%",
        padding: "10px 12px",
        margin: "5px 0",
        background: "rgba(15, 23, 42, 0.9)",
        border: "1px solid rgba(148, 163, 184, 0.6)",
        borderRadius: "10px",
        color: "white",
        outline: "none",
        fontSize: "0.95rem",
        boxSizing: "border-box",
    };

    const buttonBaseStyle = {
        padding: "8px 15px",
        border: "none",
        borderRadius: "999px",
        cursor: "pointer",
        fontWeight: "600",
        color: "white",
        marginRight: "10px",
        fontSize: "0.9rem",
    };

    return (
        <div style={pageStyle}>
            <div style={containerStyle}>
                <h2 style={{ textAlign: "left", marginBottom: "24px", fontSize: "1.9rem", fontWeight: 700 }}>
                    Manage Projects
                </h2>
                <div style={{ display: "grid", gap: "20px" }}>
                    {projects.map((project) => (
                        <div key={project._id} style={cardStyle}>
                            {editingId === project._id ? (
                                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                    <input
                                        type="text"
                                        name="title"
                                        value={editForm.title}
                                        onChange={handleInputChange}
                                        placeholder="Title"
                                        style={inputStyle}
                                    />
                                    <textarea
                                        name="description"
                                        value={editForm.description}
                                        onChange={handleInputChange}
                                        placeholder="Description"
                                        style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }}
                                    />
                                    <input
                                        type="text"
                                        name="image"
                                        value={editForm.image}
                                        onChange={handleInputChange}
                                        placeholder="Image URL"
                                        style={inputStyle}
                                    />
                                    <input
                                        type="text"
                                        name="link"
                                        value={editForm.link}
                                        onChange={handleInputChange}
                                        placeholder="Project Link"
                                        style={inputStyle}
                                    />
                                    <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                                        <button
                                            onClick={() => handleUpdateSubmit(project._id)}
                                            style={{ ...buttonBaseStyle, background: "#22c55e" }}
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={handleCancelEdit}
                                            style={{ ...buttonBaseStyle, background: "#6b7280" }}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <h3 style={{ margin: "0 0 10px 0", fontSize: "1.4rem" }}>{project.title}</h3>
                                    <p style={{ color: "rgba(226, 232, 240, 0.85)", marginBottom: "12px" }}>
                                        {project.description}
                                    </p>
                                    {project.image && (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            style={{
                                                maxWidth: "100%",
                                                height: "auto",
                                                maxHeight: "220px",
                                                borderRadius: "12px",
                                                marginBottom: "12px",
                                            }}
                                        />
                                    )}
                                    <div style={{ marginBottom: "14px" }}>
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    color: "#60a5fa",
                                                    textDecoration: "none",
                                                    fontSize: "0.9rem",
                                                    fontWeight: 500,
                                                }}
                                            >
                                                View Project Link
                                            </a>
                                        )}
                                    </div>
                                    <div style={{ display: "flex", gap: "10px" }}>
                                        <button
                                            onClick={() => handleEditClick(project)}
                                            style={{ ...buttonBaseStyle, background: "#3b82f6" }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(project._id)}
                                            style={{ ...buttonBaseStyle, background: "#ef4444" }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectUpdate