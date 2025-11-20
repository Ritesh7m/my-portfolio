import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/Ritesh-CV.pdf";
import Info from "./Info";
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
            I’m Ritesh Maurya, a web developer skilled in Java and the MERN stack. I build dynamic, responsive web applications and focus on problem-solving with Data Structures and Algorithms. My projects include RS Enterprises (MERN e-commerce with cart and payments), StudyNotion (e-learning platform with dashboards and secure payments), and LeetStatus (React app to instantly view LeetCode statistics). I aim to grow as a Full Stack Developer, creating clean, user-friendly applications that deliver real value
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
