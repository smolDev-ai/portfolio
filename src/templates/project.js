import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

import "../components/bootstrap.css"

import { Icon } from "@iconify/react"
import postgresqlIcon from "@iconify/icons-logos/postgresql"
import reactIcon from "@iconify/icons-logos/react"
import knexIcon from "@iconify/icons-logos/knex"
import nodejsIcon from "@iconify/icons-logos/nodejs-icon"
import expressIcon from "@iconify/icons-logos/express"
import reduxIcon from "@iconify/icons-logos/redux"
import javascriptIcon from "@iconify/icons-logos/javascript"
import html5Icon from "@iconify/icons-simple-icons/html5"
import css3Icon from "@iconify/icons-simple-icons/css3"

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
      <SEO title={project.projectTitle} />
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
          <div class="d-flex justify-content-between align-items-center">
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
            <img
              src={project.image.publicURL}
              width="100%"
              height="500px"
              style={{ objectFit: "contain" }}
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
            <div className="row">
              {project.technologies.map(tech => {
                return (
                  <div
                    style={{ display: "inline-block" }}
                    className="col-lg-6 col-md-6"
                  >
                    {tech.Tech.includes("React") ? (
                      <span>
                        <Icon width="3em" icon={reactIcon} /> {tech.Tech}
                      </span>
                    ) : null}
                    {tech.Tech.includes("Express") ? (
                      <span>
                        <Icon width="3em" icon={expressIcon} /> {tech.Tech}
                      </span>
                    ) : null}
                    {tech.Tech.includes("Redux") ? (
                      <span>
                        <Icon width="3em" icon={reduxIcon} /> {tech.Tech}
                      </span>
                    ) : null}
                    {tech.Tech.includes("Node") ? (
                      <span>
                        <Icon width="3em" icon={nodejsIcon} /> {tech.Tech}
                      </span>
                    ) : null}
                    {tech.Tech.includes("Knex") ? (
                      <span>
                        <Icon width="3em" icon={knexIcon} /> {tech.Tech}
                      </span>
                    ) : null}
                    {tech.Tech.includes("Postgres") ? (
                      <span>
                        <Icon width="3em" icon={postgresqlIcon} /> {tech.Tech}
                      </span>
                    ) : null}
                    {tech.Tech.includes("JavaScript") ? (
                      <span>
                        <Icon width="3em" icon={javascriptIcon} /> {tech.Tech}
                      </span>
                    ) : null}
                    {tech.Tech.includes("HTML5") ? (
                      <span>
                        <Icon color="#E44D26" width="3em" icon={html5Icon} />{" "}
                        {tech.Tech}
                      </span>
                    ) : null}
                    {tech.Tech.includes("CSS3") ? (
                      <span>
                        <Icon color="#2965f1" width="3em" icon={css3Icon} />{" "}
                        {tech.Tech}
                      </span>
                    ) : null}
                  </div>
                )
              })}
            </div>
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
