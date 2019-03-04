import React from "react"
// import { Link } from "gatsby"

const Profile = ({ data, pageContext }) => {
  const { username, githubLink } = pageContext
  return (
    <div>
      <h2>{username}</h2>
      <a href={`${githubLink}`}>Github Link</a>
    </div>
  )
}

export default Profile
