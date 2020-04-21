import React from "react"
import "./layout.css"
import "./bootstrap.css"
import "./venobox/venobox.min.css"
import Img from "gatsby-image"

const Portfolio = props => {
  return (
    <section id="portfolio" class="portfolio section-bg">
      <div class="container">
        <div class="section-title">
          <h2>Portfolio</h2>
        </div>

        <div class="row portfolio-container">
          {props.images.map(image => {
            return (
              <div class="col-lg-4 col-md-6 portfolio-item">
                <div class="portfolio-wrap">
                  <Img fluid={image.node.image.childImageSharp.fluid} />
                  <div class="portfolio-links">
                    <a href={image.node.URLs.github} title="Source Code">
                      <i class="bx bxl-github"></i>
                    </a>
                    <a href={image.node.URLs.deployed} title="Deployed">
                      <i class="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
