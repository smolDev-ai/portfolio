import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"

import { Icon, InlineIcon } from "@iconify/react"
import postgresqlIcon from "@iconify/icons-logos/postgresql"
import reactIcon from "@iconify/icons-logos/react"
import knexIcon from "@iconify/icons-logos/knex"
import nodejsIcon from "@iconify/icons-logos/nodejs-icon"
import expressIcon from "@iconify/icons-logos/express"
import reduxIcon from "@iconify/icons-logos/redux"

export const query = graphql`
  query ProjectQuery($id: Int!) {
    strapiProjects(strapiId: { eq: $id }) {
      strapiId
      projectTitle
      description
      image {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 600) {
            ...GatsbyImageSharpFluid
          }
        }
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
            <Img fluid={project.image.childImageSharp.fluid} />
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
                  {tech.Tech === "reactIcon" ? (
                    <Icon width="3em" icon={reactIcon} />
                  ) : null}
                  {tech.Tech === "expressIcon" ? (
                    <Icon width="3em" icon={expressIcon} />
                  ) : null}
                  {tech.Tech === "reduxIcon" ? (
                    <Icon width="3em" icon={reduxIcon} />
                  ) : null}
                  {tech.Tech === "nodejsIcon" ? (
                    <Icon width="3em" icon={nodejsIcon} />
                  ) : null}
                  {tech.Tech === "knexIcon" ? (
                    <Icon width="3em" icon={knexIcon} />
                  ) : null}
                  {tech.Tech === "postgresqlIcon" ? (
                    <Icon width="3em" icon={postgresqlIcon} />
                  ) : null}
                </div>
              )
            })}
            {project.Video ? (
              <div style={{ paddingTop: "1em" }}>
                <h2>Demo</h2>
                <video width="100%" height="auto" controls>
                  <source src={project.Video.publicURL} type="video/mp4" />
                </video>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Project
