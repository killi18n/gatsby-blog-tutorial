import React from "react"
import { Link } from "gatsby"
import Header from "./Header"

const Layout = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
  } = data
  return (
    <div>
      <Header />
      {edges.map((edge, index) => {
        const { frontmatter } = edge.node
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontFamily: "avenir",
            }}
            key={frontmatter.path ? frontmatter.path : index}
          >
            <Link to={frontmatter.path} style={{ marginBottom: "1rem" }}>
              {frontmatter.title}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Layout
