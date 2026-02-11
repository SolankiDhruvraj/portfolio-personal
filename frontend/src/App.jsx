import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { Experience } from "../components/Experience.jsx";
import Contact from "../routes/contact.jsx";
import Home from "../routes/Home.jsx";
import AddProject from "../routes/add-project.jsx";
import ProjectUpdate from "../routes/project-update.jsx";
import ProjectsPage from "../routes/projects.jsx";

const AppLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      {/* Background 3D experience with scroll-driven sections */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
        <Experience />
      </div>

      <nav
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          padding: "20px",
          display: "flex",
          gap: "20px",
          zIndex: 2,
          pointerEvents: "auto",
          background: "transparent",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "#fff", fontWeight: "bold" }}>
          Home
        </Link>
        <Link to="/projects" style={{ textDecoration: "none", color: "#fff", fontWeight: "bold" }}>
          Projects
        </Link>
        <Link to="/contact" style={{ textDecoration: "none", color: "#fff", fontWeight: "bold" }}>
          Contact
        </Link>
      </nav>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          paddingTop: "70px",
          boxSizing: "border-box",
          pointerEvents: isHome ? "none" : "auto",
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/add-project" element={<AddProject />} />
            <Route path="/project-update" element={<ProjectUpdate />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
};

export default App;