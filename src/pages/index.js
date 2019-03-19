import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/structures/Layout"
import SEO from "../components/seo"
import "./index.scss"

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO
        title="slave4dead"
        keywords={[`react`, `javascript`, `nodejs`]}
        description="slave4dead's programming blog"
      />
      <Layout
        data={data}
        avatarUrl="https://avatars2.githubusercontent.com/u/47375524?s=400&u=9c6488c70f08ac60577aff332f10fe50d6cecfd2&v=4"
      />
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { langKey: { eq: "ko_KR" } } }
    ) {
      edges {
        node {
          fields {
            slug
            langKey
          }
          frontmatter {
            title
            path
            date
            excerpt
          }
        }
      }
    }
  }
`

export default IndexPage
