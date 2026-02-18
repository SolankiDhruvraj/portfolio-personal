import { useState, useEffect } from "react"
import axios from "axios"
import { apiUrl } from "../config/api.js"

const AddProject = () => {
    const [project, setProject] = useState({
        title: "",
        description: "",
        image: "",
        link: ""
    })
    const [projects, setProjects] = useState([])

    const fetchProjects = async () => {
        try {
            const response = await axios.get(apiUrl("/api/project/get-projects"))
            setProjects(response.data.projects)
        } catch (error) {
            console.error("Error fetching projects:", error)
        }
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    const handleChange = (e) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(project)
        axios.post(apiUrl("/api/project/add-project"), project)
            .then((res) => {
                console.log(res.data)
                setProject({
                    title: "",
                    description: "",
                    image: "",
                    link: ""
                });
                alert("Project added successfully!");
                fetchProjects(); // Refresh the list
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this project?")) return;
        try {
            await axios.delete(apiUrl(`/api/project/delete-project/${id}`))
            fetchProjects(); // Refresh the list
        } catch (error) {
            console.error("Error deleting project:", error)
        }
    }

    const pageStyle = {
        minHeight: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "40px 20px",
        boxSizing: "border-box",
        paddingBottom: "100px",
    };

    const cardStyle = {
        width: "100%",
        maxWidth: "600px",
        padding: "32px",
        background: "rgba(15, 23, 42, 0.85)",
        backdropFilter: "blur(18px)",
        borderRadius: "18px",
        border: "1px solid rgba(148, 163, 184, 0.5)",
        boxShadow: "0 20px 45px rgba(15, 23, 42, 0.8)",
        color: "white",
        marginBottom: "40px",
    };

    const headingStyle = {
        textAlign: "left",
        marginBottom: "8px",
        fontSize: "1.8rem",
        fontWeight: "700",
    };

    const subheadingStyle = {
        marginBottom: "24px",
        fontSize: "0.95rem",
        color: "rgba(226, 232, 240, 0.8)",
    };

    const labelStyle = {
        display: "block",
        fontSize: "0.85rem",
        fontWeight: 500,
        marginBottom: "6px",
        color: "rgba(226, 232, 240, 0.86)",
    };

    const inputStyle = {
        width: "100%",
        padding: "10px 12px",
        marginBottom: "16px",
        background: "rgba(15, 23, 42, 0.9)",
        border: "1px solid rgba(148, 163, 184, 0.6)",
        borderRadius: "10px",
        color: "white",
        outline: "none",
        fontSize: "0.95rem",
        boxSizing: "border-box",
    };

    const buttonStyle = {
        width: "100%",
        padding: "12px",
        marginTop: "4px",
        background: "linear-gradient(135deg, #22c55e, #16a34a)",
        border: "none",
        borderRadius: "999px",
        color: "white",
        fontWeight: "600",
        cursor: "pointer",
        fontSize: "0.95rem",
    };

    // Using the same delete button style as defined in previous steps for consistency
    const deleteButtonStyle = {
        background: "rgba(239, 68, 68, 0.2)",
        color: "#fca5a5",
        border: "1px solid rgba(239, 68, 68, 0.5)",
        padding: "8px 16px",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "500",
        fontSize: "0.85rem",
        transition: "all 0.2s",
        marginTop: "16px",
        width: "100%"
    };

    return (
        <div style={pageStyle}>
            <div style={cardStyle}>
                <h2 style={headingStyle}>Add New Project</h2>
                <p style={subheadingStyle}>
                    Create a new portfolio entry with a title, description, visuals, and a link to your live project or repository.
                </p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title" style={labelStyle}>Title</label>
                        <input
                            id="title"
                            type="text"
                            name="title"
                            placeholder="Project title"
                            value={project.title}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                    <div>
                        <label htmlFor="description" style={labelStyle}>Description</label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Short summary of what this project does and why it matters"
                            value={project.description}
                            onChange={handleChange}
                            style={{ ...inputStyle, minHeight: "90px", resize: "vertical" }}
                        />
                    </div>
                    <div>
                        <label htmlFor="image" style={labelStyle}>Image URL</label>
                        <input
                            id="image"
                            type="text"
                            name="image"
                            placeholder="https://..."
                            value={project.image}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                    <div>
                        <label htmlFor="link" style={labelStyle}>Project Link</label>
                        <input
                            id="link"
                            type="text"
                            name="link"
                            placeholder="Live demo or GitHub link"
                            value={project.link}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                    <button type="submit" style={buttonStyle}>Add Project</button>
                </form>
            </div>

            <h3 style={{ color: "white", marginBottom: "20px", fontSize: "1.6rem" }}>Existing Projects</h3>

            {projects.map((project) => (
                <div key={project._id} style={cardStyle}>
                    <h2 style={headingStyle}>{project.title}</h2>
                    <p style={subheadingStyle}>{project.description}</p>
                    {project.image && (
                        <img
                            src={project.image}
                            alt={project.title}
                            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '16px' }}
                        />
                    )}
                    <button
                        style={deleteButtonStyle}
                        onClick={() => handleDelete(project._id)}
                        onMouseOver={(e) => {
                            e.currentTarget.style.background = "rgba(239, 68, 68, 0.3)";
                            e.currentTarget.style.color = "#fecaca";
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.background = "rgba(239, 68, 68, 0.2)";
                            e.currentTarget.style.color = "#fca5a5";
                        }}
                    >
                        Delete Project
                    </button>
                </div>
            ))}
        </div>
    )
}

export default AddProject