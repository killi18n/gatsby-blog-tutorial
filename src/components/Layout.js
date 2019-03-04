import React from "react"
import { Link } from "gatsby"
import Header from "./Header"
import "./Layout.scss"

const Layout = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
  } = data
  return (
    <div
      className="LayoutWrapper"
      //   style={{
      //     display: "flex",
      //     flexDirection: "column",
      //     alignItems: "center",
      //     fontFamily: "avenir",
      //   }}
    >
      <Header />
      {edges.map((edge, index) => {
        const { frontmatter } = edge.node
        return (
          <div key={frontmatter.path ? frontmatter.path : index}>
            <Link to={frontmatter.path} style={{ marginBottom: "1rem" }}>
              {frontmatter.title}
            </Link>
          </div>
        )
      })}
      <div style={{ marginTop: "1rem" }}>
        <Link to="/tags">Browse by Tag</Link>
      </div>
    </div>
  )
}

export default Layout
