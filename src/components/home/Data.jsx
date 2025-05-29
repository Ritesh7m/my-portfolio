import React from 'react';
import hand from '../../assets/hand.svg';
import send from '../../assets/send.svg';

const Data = () => {
  return (
    <div className="home__data">
      <div className="home__title-row">
        <h1 className="home__title">Ritesh </h1>
        <img src={hand} alt="waving hand" className="home__hand" />
      </div>

      <h3 className="home__subtitle">Full Stack Developer</h3>

      <p className="home__description">
        I am a Full Stack Developer with a passion for creating dynamic and responsive web applications. I have experience in both front-end and back-end development skills.
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello
        <img src={send} alt="send" className="button__icon-img" />
      </a>
    </div>
  );
};

export default Data;
