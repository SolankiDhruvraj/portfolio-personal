import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";

const ProjectsPage = () => {
  const pageStyle = {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "40px 0",
    boxSizing: "border-box",
  };

  return (
    <div style={pageStyle}>
      <ProjectCard />
    </div>
  );
};

export default ProjectsPage;


