import React from 'react'
import { Link } from 'react-router-dom'
// import HeroImg from "../../assets/svg/heroImg.svg"
/* eslint-disable */
export const Landing = () => {
  return (
    <main>
      <div className="hero-wrapper">
        <div className="left-pane">
       {/* <HeroImg /> */}
        </div>
        <div className="right-pane centered vertical-direction">
          <h1 className="mb-lg header-logo font1">B-Quiz</h1>
          <p className="header-para font3 padding-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Sed, doloribus .</p>
            <Link to="/#cates" className="decor-none play-now-btn">Explore Quizzes</Link>
        </div>
      </div>
      <h1 className="category" id="categories">Categories</h1>
      <div className="category-wrapper">
        
          <Link to="/rules" className="card-category shadow-box">
            <img src="./assets/painting.jpg" alt="painting" className="category-image" />
            <div className="category-content">
              <h3 className="font3 category-head">Paintings</h3>
              <h4 >1 Quiz</h4>
            </div>
          </Link>
          <Link to="/rules" className="card-category shadow-box">
            <img src="./assets/painting.jpg" alt="painting" className="category-image" />
            <div className="category-content">
              <h3 className="font3 category-head">Paintings</h3>
              <h4 >1 Quiz</h4>
            </div>
          </Link>
          <Link to="/rules" className="card-category shadow-box">
            <img src="./assets/painting.jpg" alt="painting" className="category-image" />
            <div className="category-content">
              <h3 className="font3 category-head">Paintings</h3>
              <h4 >1 Quiz</h4>
            </div>
          </Link>
          <Link to="/rules" className="card-category shadow-box">
            <img src="./assets/painting.jpg" alt="painting" className="category-image" />
            <div className="category-content">
              <h3 className="font3 category-head">Paintings</h3>
              <h4 >1 Quiz</h4>
            </div>
          </Link>
       
      </div>
    </main>
  )
}
