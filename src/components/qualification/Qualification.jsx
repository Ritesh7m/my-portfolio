import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Education &Experience</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex ${
              activeTab === "education" ? "qualification__active" : ""
            }`}
            onClick={() => setActiveTab("education")}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
          <div
            className={`qualification__button button--flex ${
              activeTab === "experience" ? "qualification__active" : ""
            }`}
            onClick={() => setActiveTab("experience")}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i> Work
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {activeTab === "education" && (
            <div className="qualification__content">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    BE- Information Technology
                  </h3>
                  <span className="qualification__subtitle">
                    Mumbai University
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> Oct 2022 - 2026
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">HSC (Maths)</h3>
                  <span className="qualification__subtitle">
                    Harihar Public School - UP
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> July 2021 - May
                    2022
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">SSC</h3>
                  <span className="qualification__subtitle">
                    Harihar Public School - UP
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> July 2020 - June
                    2021
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "experience" && (
            <div className="qualification__content">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Web Devlopment-Internship
                  </h3>
                  <span className="qualification__subtitle">
                    IBM CSRBOX- Remote
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>June 2024 - AUG 2024
                  </div>
                </div>
              </div>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    MERN Developer-Internship{" "}
                  </h3>
                  <span className="qualification__subtitle">
                    Edunet Foundation -Remote
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> Feb 2025 - Mar 2025
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Freelancing</h3>
                  <span className="qualification__subtitle">Remote</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2024 - Present
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
