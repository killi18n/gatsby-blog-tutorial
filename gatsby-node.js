/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

const createTagPages = (createPage, posts) => {
  const allTagsIndexTemplate = path.resolve("src/templates/allTagsIndex.js")
  const singleTagsIndexTemplate = path.resolve(
    "src/templates/singleTagIndex.js"
  )

  const postsByTag = {}

  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = []
        }

        postsByTag[tag].push(node)
      })
    }
  })

  const tags = Object.keys(postsByTag)

  createPage({
    path: "/tags",
    component: allTagsIndexTemplate,
    context: {
      tags: tags.sort(),
    },
  })

  tags.forEach(tagName => {
    const posts = postsByTag[tagName]
    createPage({
      path: `/tags/${tagName}`,
      component: singleTagsIndexTemplate,
      context: {
        posts,
        tagName,
      },
    })
  })
}

const createProfilePage = createPage => {
  const profileTemplate = path.resolve("src/templates/profile.js")

  createPage({
    path: "/about",
    component: profileTemplate,
    context: {
      username: "killi8n",
      githubLink: "https://github.com/killi8n",
      avatarUrl:
        "https://avatars2.githubusercontent.com/u/47375524?s=400&u=9c6488c70f08ac60577aff332f10fe50d6cecfd2&v=4",
    },
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve("src/templates/blogPost.js")

  return graphql(
    `
      query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              fields {
                slug
                langKey
              }
              frontmatter {
                title
                tags
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }
    const posts = result.data.allMarkdownRemark.edges
    const translatedPosts = posts.filter(
      post => post.node.fields.langKey !== "ko_KR"
    )
    createProfilePage(createPage)
    createTagPages(createPage, posts)
    posts.forEach(({ node }, index) => {
      const { slug, langKey } = node.fields

      if (langKey !== "ko_KR") {
        createPage({
          path: slug,
          component: blogPostTemplate,
          context: {
            slug,
          },
        })
        return
      }

      let prev = null
      let next = null

      if (index !== 0) {
        let prevIndex = index - 1
        while (
          posts[prevIndex] &&
          posts[prevIndex].node.fields.langKey !== "ko_KR"
        ) {
          prevIndex -= 1
        }
        prev = posts[prevIndex]
      }
      if (index !== posts.length - 1) {
        let nextIndex = index + 1
        while (
          posts[nextIndex] &&
          posts[nextIndex].node.fields.langKey !== "ko_KR"
        ) {
          nextIndex += 1
        }
        next = posts[nextIndex]
      }

      const translated = translatedPosts.filter(translatedPost =>
        translatedPost.node.fields.slug.includes(node.fields.slug)
      )

      createPage({
        path: slug,
        component: blogPostTemplate,
        context: {
          slug,
          prev,
          next,
          translatedPosts: translated.length > 0 ? translated : [],
        },
      })
    })
  })
}
