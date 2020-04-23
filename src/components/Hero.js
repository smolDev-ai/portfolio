import React from "react"
import Typed from "react-typed"
import "./layout.css"
import "./bootstrap.css"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <section
      id="hero"
      class="d-flex flex-column justify-content-center align-items-center"
    >
      <div class="hero-container">
        <h1>Megan Miller</h1>
        <p>
          I'm a{" "}
          <Typed
            strings={["Fullstack Web Developer", "Freelancer"]}
            typeSpeed={40}
            backSpeed={50}
            backDelay={2000}
            loop
          />
        </p>
      </div>
    </section>
  )
}

export default Hero
