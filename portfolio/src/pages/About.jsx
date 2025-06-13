import { useEffect } from "react";
import { FaCode, FaLaptopCode, FaTools, FaGraduationCap } from "react-icons/fa";
import "./About.css";
import profile from "../assets/profile.jpg";

const About = () => {
  useEffect(() => {
    // Add fade-in animation to sections
    const sections = document.querySelectorAll(".about-section");
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

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      category: "Frontend Development",
      icon: <FaCode />,
      items: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3/SASS",
        "Responsive Design",
        "UI/UX",
      ],
    },
    {
      category: "Backend Development",
      icon: <FaLaptopCode />,
      items: [
        "Node.js",
        "Express",
        "Python",
        "MongoDB",
        "RESTful APIs",
        "GraphQL",
      ],
    },
    {
      category: "Tools & Technologies",
      icon: <FaTools />,
      items: ["Git", "Docker", "AWS", "Webpack", "Jest", "CI/CD"],
    },
    {
      category: "Education & Learning",
      icon: <FaGraduationCap />,
      items: [
        "Computer Science Degree",
        "Online Courses",
        "Tech Conferences",
        "Open Source",
      ],
    },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-container">
          <div className="about-content">
            <div className="about-image-section about-section">
              <div className="about-image-wrapper">
                <img
                  src={profile}
                  alt="About Me"
                  className="about-profile-image"
                />
                <div className="about-image-border"></div>
              </div>
            </div>
            <div className="about-text-section about-section">
              <h1 className="about-title">About Me</h1>
              <div className="about-description">
                <p>
                  I'm a passionate software engineer with a strong foundation in
                  web development and a keen eye for creating elegant,
                  user-friendly applications. With several years of experience
                  in the industry, I've worked on various projects ranging from
                  small business websites to complex enterprise applications.
                </p>
                <p>
                  My journey in software development began with a curiosity
                  about how things work on the web, which led me to pursue a
                  degree in Computer Science. Since then, I've been constantly
                  learning and adapting to new technologies and methodologies to
                  stay at the forefront of web development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section about-section">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-group">
              <div className="skill-group-header">
                <div className="skill-icon">{skillGroup.icon}</div>
                <h3 className="skill-category-title">{skillGroup.category}</h3>
              </div>
              <ul className="skill-list">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="interests-section about-section">
        <h2 className="section-title">Interests & Hobbies</h2>
        <div className="interests-content">
          <p>
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or participating in
            hackathons. I'm also passionate about photography, hiking, and
            playing the guitar. These activities help me maintain a healthy
            work-life balance and bring fresh perspectives to my development
            work.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
