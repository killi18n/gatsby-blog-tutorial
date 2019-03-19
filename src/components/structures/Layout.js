import React from "react"
import { Link } from "gatsby"
import PageWrapper from "./PageWrapper"
import "./Layout.scss"

const Layout = ({ data, avatarUrl }) => {
  const {
    allMarkdownRemark: { edges },
  } = data
  return (
    <PageWrapper>
      <div className="PostList">
        <div className="innerPostList">
          {edges.map(edge => {
            const {
              frontmatter,
              fields: { slug },
            } = edge.node
            return (
              <div to={frontmatter.path} className="PostItem" key={slug}>
                <Link
                  className="PostTitle"
                  to={slug}
                  style={{ marginBottom: "1rem" }}
                >
                  {frontmatter.title}
                </Link>
                <div className="PostPreview">{frontmatter.excerpt}</div>
              </div>
            )
          })}
        </div>
      </div>
    </PageWrapper>
  )
}

export default Layout
