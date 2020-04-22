import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import About from "../components/About"
import Portfolio from "../components/Portfolio"
import Skills from "../components/Skills"
import Hero from "../components/Hero"

const IndexPage = () => {
  const project_images = useStaticQuery(graphql`
    query {
      allStrapiProjects {
        edges {
          node {
            strapiId
            URLs {
              github
              deployed
            }
            image {
              childImageSharp {
                fluid(maxWidth: 800, maxHeight: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <About />
      <Skills />
      <Portfolio images={project_images.allStrapiProjects.edges} />
    </Layout>
  )
}

export default IndexPage
