import React from "react"
import "./layout.css"
import "./bootstrap.css"
import "./boxicons/css/boxicons.min.css"
import { Icon } from "@iconify/react"
import pythonIcon from "@iconify/icons-simple-icons/python"

const Skills = () => {
  return (
    <section id="skills" class="services">
      <div class="container">
        <div class="section-title">
          <h2>Skills</h2>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div class="icon">
              <i class="bx bx-code-alt"></i>
            </div>
            <h4 class="title">Responsive Web Design</h4>
            <p class="description">
              Experience in creating responsive websites and apps using HTML,
              CSS, LESS, SASS and CSS libraries.
            </p>
          </div>
          <div
            class="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="icon">
              <i class="bx bxl-javascript"></i>
            </div>
            <h4 class="title">JavaScript</h4>
            <p class="description">
              Experience in using JavaScript to render dynamic content and
              create a interactive user experience.
            </p>
          </div>
          <div
            class="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="icon">
              <i class="bx bxl-react"></i>
            </div>
            <h4 class="title">React/Redux</h4>
            <p class="description">
              Use of React and Redux to create rich client side applications,
              handle client side routing and complex state management.
            </p>
          </div>
          <div
            class="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div class="icon">
              <i class="bx bxl-nodejs"></i>
            </div>
            <h4 class="title">NodeJS</h4>
            <p class="description">
              Use of NodeJS and Express to create custom API's with full CRUD
              functionality, manage back end workflow and server client facing
              apps.
            </p>
          </div>
          <div
            class="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div class="icon">
              <Icon icon={pythonIcon} />
            </div>
            <h4 class="title">Python</h4>
            <p class="description">
              Experience using Python for creating APIs via Django and Flask.
              Also experience in creating custom solutions to complex problems
              with Python.
            </p>
          </div>
          <div
            class="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div class="icon">
              <i class="bx bx-data"></i>
            </div>
            <h4 class="title">Databases</h4>
            <p class="description">
              Design and create database relational models to house app data
              with full CRUD functionality.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
