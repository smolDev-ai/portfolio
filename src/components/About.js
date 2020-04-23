import React from "react"
import "./layout.css"
import "./bootstrap.css"
import "./icofont/icofont.min.css"

const About = () => {
  return (
    <section id="about" class="about">
      <div class="container">
        <div class="section-title">
          <h2>About</h2>
        </div>

        <div class="row">
          <div class="col-lg-4" data-aos="fade-right">
            <img
              src="https://i.imgur.com/ZamYjtq.jpg"
              class="img-fluid"
              alt=""
              style={{ width: "600px", height: "350px", objectFit: "cover" }}
            />
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Fullstack Web Developer</h3>
            <p>
              I've been coding since 2012. I've always had a passion for
              learning new things, and code was something that I immedialey grew
              to love because it's a field that never stops growing. I attended
              and completed <a href="lambdaschool.com">Lambda School</a> as a
              stepping stone to achieve my dream of becoming a Fullstack Web
              Developer. During my time at Lambda I gained experience in working
              with a wide range of technology including but not limited to
              JavaScript, React, Redux, Node/Express, Python, Flask, Django,
              GraphQL, HTML & CSS, CSS Preprocessors, Jest, and React Testing
              Library.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
