import React from 'react';
import { Data } from './Data';
import Tilt from 'react-parallax-tilt';
import './work.css';

const Works = () => {
  return (
    <section className="work section" id="work">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Recent Works</span>

      <div className="work__container container grid">
        {Data.map(({ id, image, title, description, codeLink, demoLink }) => (
          <Tilt
            key={id}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.03}
            transitionSpeed={400}
            className="tilt"
          >
            <div className="work__card">
              <img src={image} alt={title} className="work__img" />
              <h3 className="work__title">{title}</h3>
              <p className="work__description">{description}</p>
              <div className="work__buttons">
                {codeLink ? (
                  <a
                    href={codeLink}
                    className="work__button black-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                ) : (
                  <span className="work__button black-button disabled">
                    Code
                  </span>
                )}
                
                {demoLink ? (
                  <a
                    href={demoLink}
                    className="work__button black-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="work__button black-button disabled">
                    Live Demo
                  </span>
                )}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Works;