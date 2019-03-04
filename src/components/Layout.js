import React from "react"
import { Link } from "gatsby"
import Header from "./Header"
import "./Layout.scss"
import Footer from "./Footer"

const Layout = ({ data, avatarUrl }) => {
  const {
    allMarkdownRemark: { edges },
  } = data
  return (
    <div className="LayoutWrapper">
      <Header />
      <main>
        <div className="PostList">
          {edges.map((edge, index) => {
            const { frontmatter } = edge.node
            return (
              <div
                to={frontmatter.path}
                className="PostItem"
                key={frontmatter.path ? frontmatter.path : index}
              >
                <Link
                  className="PostTitle"
                  to={frontmatter.path}
                  style={{ marginBottom: "1rem" }}
                >
                  {frontmatter.title}
                </Link>
                <div className="PostPreview">{frontmatter.excerpt}</div>
              </div>
            )
          })}
        </div>
      </main>
      <Footer
        avatarUrl={avatarUrl}
        githubLink="https://github.com/evals4dead"
      />
      {/* <div style={{ marginTop: "1rem" }}>
        <Link to="/tags">Browse by Tag</Link>
      </div> */}
    </div>
  )
}

export default Layout
