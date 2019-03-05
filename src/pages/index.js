import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/structures/Layout"
import SEO from "../components/seo"
import "./index.css"

const IndexPage = ({ data }) => (
  <>
    <SEO
      title="evals4dead"
      keywords={[`react`, `javascript`, `nodejs`]}
      description="evals4dead's programming blog"
    />
    <Layout
      data={data}
      avatarUrl="https://avatars2.githubusercontent.com/u/47375524?s=400&u=9c6488c70f08ac60577aff332f10fe50d6cecfd2&v=4"
    />
  </>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { title: { ne: "My Projects" } } }) {
      edges {
        node {
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
