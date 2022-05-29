import React from 'react'
import {Link} from "react-router-dom"

export const Navbar = () => {
  return (
    <header>
    <div>
      <h1 className="header-logo">B-Quiz</h1>
      <small className="slogan">Test your creativity skills</small>
    </div>
    <div className="mr-auto page-link-wrapper font3">
      <ul className="style-list-none">
        <li className="inline-block">
          <a href="index.html" className="page-link decor-none active-item"
            >Home</a
          >
        </li>
        <li className="inline-block">
          <a href="dashboard.html" className="page-link decor-none">dashboard</a>
        </li>
      </ul>
    </div>
    <div className="badge-container">
      <Link to="/profile" className="avatar avatar-badge text-primary reset">
        <i className="fa fa-user fa-lg" id="user-icon"></i>
        
      </Link>
      
        <i className="fas fa-lg fa-moon " id="moon-btn"> </i>
    </div>
  </header>
  )
}
