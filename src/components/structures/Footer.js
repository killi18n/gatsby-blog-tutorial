import React from "react"
import "./Footer.scss"
import { Link } from "gatsby"
import NormalButton from "./NormalButton"

const Footer = ({ avatarUrl, githubLink }) => {
  return (
    <div className="Footer">
      <a href={githubLink} className="ImageWrapper" to="/about">
        <img src={avatarUrl} />
      </a>
      <div className="footerButtons">
        <NormalButton to="/tags">Browse By Tags</NormalButton>
        <NormalButton style={{ marginLeft: "1rem" }} to="/about">
          About
        </NormalButton>
      </div>
    </div>
  )
}

export default Footer
