import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import "./bootstrap.css"
import "./boxicons/css/boxicons.min.css"

const Header = ({ siteTitle }) => {
  const showNav = () => {
    document.body.classList.toggle("mobile-nav-active")
  }

  return (
    <aside id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <img
            src="https://i.imgur.com/ZamYjtq.jpg"
            alt=""
            class="img-fluid rounded-circle"
            style={{ height: "120px", objectFit: "cover" }}
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
            <li>
              <a href="#">
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
          </ul>
        </nav>
        <button
          type="button"
          class="mobile-nav-toggle d-xl-none"
          onClick={() => showNav()}
        >
          <i class="icofont-navigation-menu"></i>
        </button>
      </div>
    </aside>
  )
}

export default Header
