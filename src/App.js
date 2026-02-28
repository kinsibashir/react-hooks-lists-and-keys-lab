import React from "react";
import NavBar from "./components/NavBar";
import ProjectList from "./components/ProjectList";

function App() {
  const projects = [
    {
      id: 1,
      name: "Project Alpha",
      technologies: ["React", "CSS", "JavaScript"]
    },
    {
      id: 2,
      name: "Project Beta",
      technologies: ["HTML", "CSS"]
    },
    {
      id: 3,
      name: "Project Gamma",
      technologies: ["Node", "Express", "MongoDB"]
    }
  ];

  return (
    <div>
      <NavBar />
      <h1>My Projects</h1>
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;




