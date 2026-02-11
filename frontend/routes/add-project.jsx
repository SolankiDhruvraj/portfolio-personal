import { useState } from "react"
import axios from "axios"
import { apiUrl } from "../config/api.js"

const AddProject = () => {
    const [project, setProject] = useState({
        title: "",
        description: "",
        image: "",
        link: ""
    })
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
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const pageStyle = {
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        boxSizing: "border-box",
    };

    const cardStyle = {
        width: "100%",
        maxWidth: "520px",
        padding: "32px",
        background: "rgba(15, 23, 42, 0.85)",
        backdropFilter: "blur(18px)",
        borderRadius: "18px",
        border: "1px solid rgba(148, 163, 184, 0.5)",
        boxShadow: "0 20px 45px rgba(15, 23, 42, 0.8)",
        color: "white",
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
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                    <button type="submit" style={buttonStyle}>Add Project</button>
                </form>
            </div>
        </div>
    )
}

export default AddProject