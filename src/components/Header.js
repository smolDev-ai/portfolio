import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "../../public/assets/vendor/bootstrap/css/bootstrap.css"
import "./layout.css"

const Header = ({ siteTitle }) => {
  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <img
            src="http://placehold.it/600x600"
            alt=""
            class="img-fluid rounded-circle"
          />
          <h1 className="text-light">
            <a href="/">Megan Miller</a>
          </h1>
          <div className="social-links mt-3 text-center">
            <a href="#" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-medium"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-dev-to"></i>
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-github"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
        <nav class="nav-menu">
          <ul>
            <li class="active">
              <a href="index.html">
                <i class="bx bx-home"></i> <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about">
                <i class="bx bx-user"></i> <span>About</span>
              </a>
            </li>
            <li>
              <a href="#skills">
                <i class="bx bx-server"></i> <span>Skills</span>
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <i class="bx bx-book-content"></i> <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <i class="bx bx-envelope"></i> Contact
              </a>
            </li>
          </ul>
        </nav>
        <button type="button" class="mobile-nav-toggle d-xl-none">
          <i class="icofont-navigation-menu"></i>
        </button>
      </div>
    </header>
  )
}

export default Header
