import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"

export const query = graphql`
  query ProjectQuery($id: Int!) {
    strapiProjects(strapiId: { eq: $id }) {
      strapiId
      projectTitle
      description
      image {
        publicURL
      }
      URLs {
        github
        deployed
      }
      technologies {
        Tech
      }
      Video {
        publicURL
      }
    }
  }
`

const Project = ({ data }) => {
  const project = data.strapiProjects
  return (
    <Layout>
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
          <div class="d-flex justify-content-between align-items-center">
            <h2>Project Details</h2>
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>{project.projectTitle}</li>
            </ol>
          </div>
        </div>
      </section>
      <section id="portfolio-details" class="portfolio-details">
        <div class="container">
          <div class="portfolio-details-container">
            {project.Video ? (
              <video width="100%" height="auto" controls>
                <source src={project.Video.publicURL} type="video/mp4" />
              </video>
            ) : null}
            <img
              src={project.image.publicURL}
              style={{ width: "100%", paddingBottom: "1rem" }}
            />
            <div class="portfolio-info">
              <h3>{project.projectTitle}</h3>
              <ul>
                <li>
                  <a href={project.URLs.github} title="Source Code">
                    <i class="bx bxl-github"></i> <span>Source Code</span>
                  </a>
                </li>
                <li>
                  <a href={project.URLs.deployed} title="Live View">
                    <i class="bx bx-link-external"></i> <span>Live View</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="portfolio-description">
            <h3>{project.projectTitle}</h3>
            <p style={{ width: "78%" }}>{project.description}</p>
            <h2>Technologies</h2>
            {project.technologies.map(tech => {
              return (
                <div
                  style={{ display: "inline", margin: "0 auto" }}
                  className="col-sm-2 col-lg-6 col-md-4"
                >
                  {tech.Tech}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Project
