import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import PageWrapper from "../components/structures/PageWrapper"
import "./blogPost.scss"
import "prismjs/themes/prism-okaidia.css"

const Template = ({ data, pageContext }) => {
  const { next, prev } = pageContext
  const { markdownRemark } = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html
  return (
    <PageWrapper>
      <SEO
        title={title}
        keywords={[`react`, `javascript`, `nodejs`]}
        description="slave4dead's programming blog"
      />
      <div className="PostTitle__">
        <h1>{title}</h1>
      </div>
      <div className="BlogPost" dangerouslySetInnerHTML={{ __html: html }} />
      {
        // title !== 'My Projects' &&
        <div className="Navigator">
          {next && (
            <Link className="prev" to={next.frontmatter.path}>
              &lt;-{next.frontmatter.title}
            </Link>
          )}
          {prev && (
            <Link className="next" to={prev.frontmatter.path}>
              {prev.frontmatter.title}-&gt;
            </Link>
          )}
        </div>
      }
    </PageWrapper>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template
