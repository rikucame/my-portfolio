/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allDirectory {
        edges {
          node {
            relativeDirectory
            relativePath
          }
        }
      }
    }
  `)
  result.data.allDirectory.edges.forEach(({ node }) => {
    console.log(`dir: ${node.relativeDirectory}`)
    const directlyName = node.relativePath.split('/').slice(-1)[0];
    const slug = directlyName.split('-')[1]
    console.log(slug);
    if(node.relativeDirectory === 'photos') {
      createPage({
        path: slug,
        component: path.resolve(`./src/templates/filteredPhotos.tsx`),
        context: {
          relativePath: node.relativePath,
        },
      })
    }
  })
}