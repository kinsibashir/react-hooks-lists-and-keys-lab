import React from "react";

function ProjectItem({ name, technologies }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h3>{name}</h3>
      <div>
        {technologies.map((tech, index) => (
          <span
            key={index}
            style={{
              marginRight: "5px",
              backgroundColor: "#eee",
              padding: "2px 5px",
              borderRadius: "3px",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;