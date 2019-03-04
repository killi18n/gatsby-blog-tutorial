import React from "react"
import "./Footer.scss"
import { Link } from "gatsby"

const Footer = ({ avatarUrl }) => {
  return (
    <div className="Footer">
      <Link className="ImageWrapper" to="/about">
        <img src={avatarUrl} />
      </Link>
    </div>
  )
}

export default Footer
