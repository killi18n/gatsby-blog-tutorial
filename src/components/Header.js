import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import "./Header.scss"

const TitleAndDescription = ({ data }) => {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description

  return (
    <div className="HeaderWrapper">
      <Link to="/" className="title">
        {title}
      </Link>
      <div className="description">{description}</div>
    </div>
  )
}

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  )
}

export default Header
