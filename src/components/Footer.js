import React from "react"
import "./Footer.scss"
import { Link } from "gatsby"

const Footer = ({ avatarUrl, githubLink }) => {
  return (
    <div className="Footer">
      <a href={githubLink} className="ImageWrapper" to="/about">
        <img src={avatarUrl} />
      </a>
    </div>
  )
}

export default Footer
