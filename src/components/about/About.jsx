import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/Ritesh-CV.pdf";

import file from "../../assets/files.svg";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>

      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid ">
        <Tilt glareEnable={false} tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <img src={AboutImg} className="about__img " alt="About" />
        </Tilt>
        <div className="about__data">
          {/* <Info /> */}
          <p className="about__description">
            I’m Ritesh Maurya, a Full Stack Web Developer specializing in Java
            and the MERN stack. I build scalable, dynamic, and responsive web
            applications with a strong focus on clean UI/UX and performance. My
            projects include RS Enterprises (RO service platform with admin
            panel and inquiry system), StudyNotion (feature-rich e-learning
            platform with role-based dashboards and secure payments), and
            LeetStatus (a React-based app for tracking LeetCode statistics). I’m
            passionate about problem-solving using Data Structures and
            Algorithms and continuously strive to create applications that
            deliver real-world value.
          </p>
          <a download="" href={CV} className="button button--flex">
            Download CV
            <img className="button__icon-img" src={file} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
