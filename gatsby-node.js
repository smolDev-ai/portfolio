/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      projects: allStrapiProjects {
        edges {
          node {
            strapiId
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const projectDetails = result.data.projects.edges
  projectDetails.forEach((project, index) => {
    createPage({
      path: `/project/${project.node.strapiId}`,
      component: require.resolve("./src/templates/project.js"),
      context: {
        id: project.node.strapiId,
      },
    })
  })
}
