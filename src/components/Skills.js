import React from "react"
import "./layout.css"
import "./bootstrap.css"
import "./boxicons/css/boxicons.min.css"

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
              <i class="bx bxl-html5"></i>
            </div>
            <h4 class="title">HTML5</h4>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos-delay="100">
            <div class="icon">
              <i class="bx bxl-css3"></i>
            </div>
            <h4 class="title">CSS3</h4>
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
          </div>
          <div
            class="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="icon">
              <i class="bx bxl-react"></i>
            </div>
            <h4 class="title">React</h4>
          </div>
          <div
            class="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="icon">
              <i class="bx bxl-redux"></i>
            </div>
            <h4 class="title">Redux</h4>
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
