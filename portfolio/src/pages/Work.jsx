import { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Work.css";
import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.jpg"

const Work = () => {
  useEffect(() => {
    // Add fade-in animation to project cards
    const cards = document.querySelectorAll(".project-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Conference Management System",
      description:
        "A web-based application built using HTML, CSS, and PHP to streamline the management of academic or professional conferences. This system supports user authentication, session registration, and administrative controls.",
      image: {pic1},
      tags: ["HTML", "CSS", "PHP"],
      github: "https://github.com/Muthumalika123/Conference-Management-System",
      live: "https://ecommerce-demo.com",
    },
    {
      title: "Smart Canteen",
      description:
        "A web-based application designed to streamline and digitize the canteen management system. It allows users to view menus, place orders, and manage transactions efficiently. The system helps reduce manual work, improve order accuracy, and provide a better user experience for both customers and administrators.",
      image: {pic2},
      tags: ["React", "Firebase", "Material-UI", "Redux"],
      github: "https://github.com/Muthumalika123/Smart-Canteen",
      live: "https://task-manager-demo.com",
    },
    {
      title: "Porfolio Website",
      description:
        "A weather dashboard that provides real-time weather information, forecasts, and interactive maps using various weather APIs.",
      image: "https://via.placeholder.com/600x400",
      tags: ["JavaScript", "OpenWeather API", "Chart.js", "CSS"],
      github: "https://github.com/yourusername/weather-dashboard",
      live: "https://weather-dashboard-demo.com",
    },
    // {
    //   title: "Portfolio Website",
    //   description:
    //     "A modern, responsive portfolio website built with React and styled with CSS. Features smooth animations and a clean design.",
    //   image: "https://via.placeholder.com/600x400",
    //   tags: ["React", "CSS", "React Router", "React Icons"],
    //   github: "https://github.com/yourusername/portfolio",
    //   live: "https://portfolio-demo.com",
    // },
  ];

  return (
    <div className="work-page">
      <section className="work-hero">
        <div className="work-container">
          <h1 className="work-title">My Work</h1>
          <p className="work-description">
            Here are some of my recent projects. Each project represents a
            unique challenge and learning experience in my journey as a
            developer.
          </p>
        </div>
      </section>

      <section className="projects-section">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github-link"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub />
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live-link"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Work;
