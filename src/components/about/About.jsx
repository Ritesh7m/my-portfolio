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
          <Info />
          <p className="about__description">
            I am a passionate web developer with a keen interest in creating
            dynamic and responsive web applications. I thrive on challenges and
            continuously seek to improve my skills and knowledge in the
            ever-evolving field of web development.
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
