import React from "react"
import "./layout.css"
import "./main.js"

const Hero = () => {
  return (
    <section
      id="hero"
      class="d-flex flex-column justify-content-center align-items-center"
    >
      <div class="hero-container" data-aos="fade-in">
        <h1>Megan Miller</h1>
        <p>
          I'm a
          <span class="typed" data-typed-items="Developer, Freelancer,"></span>
        </p>
      </div>
    </section>
  )
}

export default Hero
