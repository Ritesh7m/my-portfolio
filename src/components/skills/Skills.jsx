import React from "react";
import "./skills.css";

const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Express.js",
  "MongoDB",
  "Node.js",
  "Git",
  "GitHub",
  'SQL',
  "C",
  "Tailwind CSS",
  'Rest API',
  "java",
  "Python(basic)",
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical Skills</span>

      <div className="skills__container container">
        {skillsData.map((skill) => (
          <span key={skill} className="skills__bubble">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
