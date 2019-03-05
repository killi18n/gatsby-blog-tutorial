import React from "react"
import { Link } from "gatsby"
import "./NormalButton.scss"

const NormalButton = ({ children, to, ...others }) => {
  if (to) {
    return (
      <Link className="NormalButton" to={to} {...others}>
        {children}
      </Link>
    )
  }
  return (
    <div className="NormalButton" {...others}>
      {children}
    </div>
  )
}

export default NormalButton
