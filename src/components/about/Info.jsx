import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className='uil uil-user-check about__icon'></i>
            <h3 className="about__title">Available</h3>
            <span className="about__subtitle">
                For Freelancing
            </span>
        </div> 
         <div className="about__box">
            <i className='uil uil-code-branch about__icon'></i>
            <h3 className="about__title">03+</h3>
            <span className="about__subtitle">
                MERN Projects
            </span>
        </div>
        <div className="about__box">
            <i className='uil uil-robot about__icon'></i>
            <h3 className="about__title">IT</h3>
            <span className="about__subtitle">
                Engineering Branch
            </span>
        </div>
    </div>
  )
}

export default Info