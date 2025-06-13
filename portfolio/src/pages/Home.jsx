import { useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Home.css";
//imports
import profile from "../assets/profile.jpg";

const Home = () => {
  useEffect(() => {
    // Add fade-in animation to elements
    const elements = document.querySelectorAll(".fade-in-element");
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/Muthumalika123",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "www.linkedin.com/in/kalpani-muthumali",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram />,
      url: "https://twitter.com/yourusername",
      label: "Instagram",
    },
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="profile-container fade-in-element">
            <div className="profile-image-wrapper">
              <img src={profile} alt="Profile" className="profile-image" />
              <div className="profile-image-border"></div>
            </div>
            <div className="profile-info">
              <h1 className="name">Kalpani Muthumali</h1>
              <h2 className="title">Software Engineer Intern</h2>
              <p className="bio">
                Passionate about creating elegant solutions to complex problems.
                Specializing in full-stack development with modern technologies.
              </p>

              <div className="social-links fade-in-element">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>

              <div className="cta-buttons fade-in-element">
                <a href="/contact" className="btn primary-btn">
                  Contact Me
                </a>
                <a href="https://github.com/Muthumalika123" className="btn secondary-btn">
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section fade-in-element">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {["React", "Java Script", "HTML", "Figma", "CSS", "Git"].map(
            (skill) => (
              <div key={skill} className="skill-card">
                <span className="skill-name">{skill}</span>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
