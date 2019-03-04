import React from "react"
import { graphql, StaticQuery } from "gatsby"

const Template = ({ data }) => {
  console.log(data)
  return <div>BlogPostHere</div>
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      id
      html
    }
  }
`

export default Template
