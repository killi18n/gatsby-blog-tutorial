import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import "./index.css"
// import Layout from "../components/layout__"
// import Image from "../components/image"

const IndexPage = ({ data }) => (
  <>
    <SEO title="evals4dead" meta="evals4dead's blog" keywords={[`react`, `javascript`, `nodejs`]} description="evals4dead's programming blog" />
    <Layout
      data={data}
      avatarUrl="https://avatars2.githubusercontent.com/u/47375524?s=400&u=9c6488c70f08ac60577aff332f10fe50d6cecfd2&v=4"
    />
  </>
  // <StaticQuery
  //   query={graphql`
  //     query {
  //       allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
  //         edges {
  //           node {
  //             frontmatter {
  //               title
  //               path
  //               date
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `}
  //   render={data => <Layout data={data} />}
  // />
  // <Layout>
  //   <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link>
  // </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
