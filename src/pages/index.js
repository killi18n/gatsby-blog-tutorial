import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import "./index.css"
// import Layout from "../components/layout__"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout data={data} />
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
          }
        }
      }
    }
  }
`

export default IndexPage
