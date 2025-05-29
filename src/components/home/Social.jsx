import React from "react";
import Tilt from "react-parallax-tilt";

const Social = () => {
  return (
    <div className="home__social">
      <Tilt scale={1.1} transitionSpeed={200}>
        <a
          href="https://github.com/Ritesh7m"
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-github-alt"></i>
        </a>
      </Tilt>

      <Tilt scale={1.1} transitionSpeed={200}>
        <a
          href="https://www.linkedin.com/in/ritesh-maurya-7459s/"
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-linkedin"></i>
        </a>
      </Tilt>

      <Tilt scale={1.1} transitionSpeed={200}>
        <a
          href="https://x.com/RiteshMaur78747"
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-twitter"></i>
        </a>
      </Tilt>

      <Tilt scale={1.1} transitionSpeed={200}>
        <a
          href=""
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="uil uil-envelope"></i>
        </a>
      </Tilt>
    </div>
  );
};

export default Social;
