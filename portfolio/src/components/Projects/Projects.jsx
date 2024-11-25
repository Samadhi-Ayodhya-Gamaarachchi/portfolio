import React, { useState } from "react";
import Header from "../Header/Header";
import iot from "../../assets/iot.jpg";
import entro from "../../assets/entrimate.jpg";
import lassana from "../../assets/lassana.jpg";
import "../Projects/Projects.css";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null); // State to track selected project

  // Array of project data
  const projects = [
    {
      id: 1,
      image: iot,
      title: "Automated Potato Sorting Machine",
      description: "This project automates the sorting of potatoes based on size and quality.",
    },
    {
      id: 2,
      image: entro,
      title: "Entrimate Lanka",
      description: "A solution aimed at improving business processes through digital transformation.",
    },
    {
      id: 3,
      image: lassana,
      title: "Lassana Lanka",
      description: "An e-commerce platform offering a seamless shopping experience.",
    },
  ];

  // Function to render the main gallery
  const renderGallery = () => (
    <div>
      <Header />
      <h1>Projects</h1>
      <div className="gallery">
        {projects.map((project) => (
          <div
            className="gallery-item"
            key={project.id}
            onClick={() => setSelectedProject(project)} // Set the selected project on click
          >
            <img src={project.image} alt={project.title} />
            <div className="hover-content">
              <p>{project.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Function to render the selected project's details
  const renderProjectDetails = () => (
    <div>
      <Header />
      <button onClick={() => setSelectedProject(null)}>Back to Projects</button> {/* Back button */}
      <h1>{selectedProject.title}</h1>
      <img src={selectedProject.image} alt={selectedProject.title} style={{ width: "50%" }} />
      <p>{selectedProject.description}</p>
    </div>
  );

  return (
    <div>
      {/* Conditionally render gallery or project details */}
      {selectedProject ? renderProjectDetails() : renderGallery()}
    </div>
  );
}

export default Projects;
