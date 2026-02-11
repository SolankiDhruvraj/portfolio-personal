import { useState } from "react"
import axios from "axios"
import { apiUrl } from "../config/api.js"

const Contact = () => {
    const [person, setPerson] = useState({
        name: "",
        email: "",
        message: ""
    })
    const handleChange = (e) => {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(person)
        axios.post(apiUrl("/api/contact/add-contact"), person)
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

    const containerStyle = {
        width: "100%",
        maxWidth: "960px",
        padding: "0 24px",
        boxSizing: "border-box",
    };

    const cardStyle = {
        width: "100%",
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
        background: "linear-gradient(135deg, #3b82f6, #6366f1)",
        border: "none",
        borderRadius: "999px",
        color: "white",
        fontWeight: "600",
        cursor: "pointer",
        fontSize: "0.95rem",
    };

    return (
        <div style={pageStyle}>
            <div style={containerStyle}>
                <div style={cardStyle}>
                    <h2 style={headingStyle}>Contact Me</h2>
                    <p style={subheadingStyle}>
                        Have a question, idea, or opportunity? Drop a message and I’ll get back to you as soon as I can.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" style={labelStyle}>Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Your full name"
                                onChange={handleChange}
                                style={inputStyle}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" style={labelStyle}>Email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                onChange={handleChange}
                                style={inputStyle}
                            />
                        </div>
                        <div>
                            <label htmlFor="message" style={labelStyle}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell me a bit about what you have in mind..."
                                onChange={handleChange}
                                style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}
                            />
                        </div>
                        <button type="submit" style={buttonStyle}>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact