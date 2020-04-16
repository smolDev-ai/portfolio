import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import About from "../components/About"
import Portfolio from "../components/Portfolio"
import Skills from "../components/Skills"
import Hero from "../components/Hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <StaticQuery
      query={graphql`
        query {
          allStrapiProjects {
            edges {
              node {
                projectTitle
                description
                URLs {
                  github
                  deployed
                }
                technologies {
                  Tech
                }
                image {
                  childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 700) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                Video {
                  publicURL
                }
              }
            }
          }
        }
      `}
      render={data =>
        data.allStrapiProjects.edges.map(project => {
          return (
            <div className="project">
              <h2>{project.node.projectTitle}</h2>
              {project.node.Video.publicURL !== null ? (
                <video controls height="400px" width="300px">
                  <source src={project.node.Video.publicURL} type="video/mp4" />
                </video>
              ) : (
                <Img fluid={project.node.image.childImageSharp.fluid} />
              )}
              <p>{project.node.description}</p>
              <a href={project.node.URLs.github}>{project.node.URLs.github}</a>
              <br />
              <a href={project.node.URLs.deployed}>
                {project.node.URLs.deployed}
              </a>
              <ul>
                {project.node.technologies.map(technology => {
                  return <li>{technology.Tech}</li>
                })}
              </ul>
            </div>
          )
        })
      }
    /> */}
    <Hero />
    <About />
    <Skills />
    <Portfolio />
  </Layout>
)

export default IndexPage
