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
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div class="row portfolio-container">
          {props.images.map(image => {
            {
              console.log(image.node.image.childImageSharp.fluid)
            }
            return (
              <div class="col-lg-4 col-md-6 portfolio-item">
                <div class="portfolio-wrap">
                  <Img fluid={image.node.image.childImageSharp.fluid} />
                  <div class="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-1.jpg"
                      data-gall="portfolioGallery"
                      class="venobox"
                      title="App 1"
                    >
                      <i class="bx bxl-github"></i>
                    </a>
                    <a href="portfolio-details.html" title="Deployed">
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
