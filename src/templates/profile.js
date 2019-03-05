import React from "react"
// import { Link } from "gatsby"
import PageWrapper from "../components/structures/PageWrapper"
import NormalButton from '../components/structures/NormalButton'
import "./profile.scss"

const Profile = ({ data, pageContext }) => {
  const { username, githubLink, avatarUrl } = pageContext
  return (
    <PageWrapper>
      <div className="ProfileWrapper">
        <div className="inner">
          <img src={avatarUrl} />
          <h2>{username}</h2>
          <a href={`${githubLink}`} style={{ border: "1px solid gray", paddingTop: '0.25rem', paddingBottom: '0.25rem', paddingLeft: '0.5rem', paddingRight: '0.5rem', borderRadius: '2px' }}>
            Github Link
          </a>
        </div>
        <NormalButton to="/about/projects" style={{marginTop: '1rem', marginBottom: '1rem', background: 'white'}}>My Projects</NormalButton>
      </div>
    </PageWrapper>
  )
}

export default Profile
