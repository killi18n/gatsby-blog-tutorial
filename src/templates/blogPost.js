import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import PageWrapper from "../components/structures/PageWrapper"
import "./blogPost.scss"
import "prismjs/themes/prism-okaidia.css"

const Template = ({ data, pageContext }) => {
  console.log(pageContext)
  console.log(data)
  const {
    markdownRemark: {
      frontmatter: { title },
      html,
    },
  } = data
  const { next, prev, translatedPosts } = pageContext

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
      {translatedPosts &&
        translatedPosts.length > 0 &&
        translatedPosts.map(post => (
          <div key={post.node.fields.slug} className="Translations">
            Translated with{" "}
            {<Link to={post.node.fields.slug}>{post.node.fields.langKey}</Link>}
          </div>
        ))}
      <div className="BlogPost" dangerouslySetInnerHTML={{ __html: html }} />
      {
        <div className="Navigator">
          {prev && (
            <Link className="prev" to={prev.node.fields.slug}>
              &lt;-{prev.node.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link className="next" to={next.node.fields.slug}>
              {next.node.frontmatter.title}-&gt;
            </Link>
          )}
        </div>
      }
    </PageWrapper>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
  # query {
  #   allMarkdownRemark(
  #     sort: { order: DESC, fields: [frontmatter___date] }
  #     filter: { fields: { langKey: { eq: "ko_KR" } } }
  #   ) {
  #     edges {
  #       node {
  #         id
  #         fields {
  #           slug
  #         }
  #         frontmatter {
  #           title
  #         }
  #         html
  #       }
  #       next {
  #         id
  #         fields {
  #           slug
  #         }
  #         frontmatter {
  #           title
  #         }
  #       }
  #       previous {
  #         id
  #         fields {
  #           slug
  #         }
  #         frontmatter {
  #           title
  #         }
  #       }
  #     }
  #   }
  # }
`

export default Template
