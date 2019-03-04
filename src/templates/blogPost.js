import React from "react"
import { graphql, Link } from "gatsby"
import Footer from "../components/Footer"
import SEO from '../components/seo';
import "./blogPost.scss"
import "prismjs/themes/prism-okaidia.css"

const Template = ({ data, pageContext }) => {
  const { next, prev } = pageContext
  const { markdownRemark } = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html
  return (
    <>
    <SEO title={title} meta="evals4dead's blog" keywords={[`react`, `javascript`, `nodejs`]} description="evals4dead's programming blog" />
    <div className="BlogPostWrapper">
      <div className="TitleBar">
        <h1>{title}</h1>
      </div>
      <div className="BlogPost" dangerouslySetInnerHTML={{ __html: html }} />
      <div className="Navigator">
        {prev && (
          <Link className="prev" to={prev.frontmatter.path}>
            &lt;-{prev.frontmatter.title}
          </Link>
        )}
        {next && (
          <Link className="next" to={next.frontmatter.path}>
            {next.frontmatter.title}-&gt;
          </Link>
        )}
      </div>
      <Footer
        avatarUrl={
          "https://avatars2.githubusercontent.com/u/47375524?s=400&u=9c6488c70f08ac60577aff332f10fe50d6cecfd2&v=4"
        }
        githubLink="https://github.com/evals4dead"
      />
    </div>
    </>
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
