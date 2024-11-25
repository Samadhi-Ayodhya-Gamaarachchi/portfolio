import React from "react";
import Header from "../Header/Header";
import iot from "../../assets/iot.jpg";
import entro from "../../assets/entrimate.jpg";
import lassana from "../../assets/lassana.jpg";
import "../Projects/Projects.css";

function Projects() {
  // Define images and titles as an array of objects
  const projects = [
    {
      image: iot,
      title: "Automated Potato Sorting Machine",
    },
    {
      image: entro,
      title: "Entrimate Lanka",
    },
    {
      image: lassana,
      title: "Lassana Lanka",
    },
  ];

  return (
    <>
      <Header />
      <h1>Projects</h1>
      <div className="gallery">
        {projects.map((project, index) => (
          <div className="gallery-item" key={index}>
            {/* Use project.image and project.title */}
            <img src={project.image} alt={project.title} />
            <div className="hover-content">
              <p>{project.title}</p>
            </div>
          </div>
        ))}
      </div>
      <h1>Competitions</h1>
    </>
  );
}

export default Projects;
