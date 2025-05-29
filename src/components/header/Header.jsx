import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Ritesh
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link " onClick={() => setToggle(false)}>
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={() => setToggle(false)}>
                <i className="uil uil-user nav__icon"></i>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link" onClick={() => setToggle(false)}>
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link" onClick={() => setToggle(false)}>
                <i className="uil uil-rocket nav__icon"></i>
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={() => setToggle(false)}>
                <i className="uil uil-message nav__icon"></i>
                Contact Us
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close" onClick={() => setToggle(false)}></i>
        </div>

        <div className="nav__toggle" onClick={() => setToggle(true)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;