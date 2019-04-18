import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "./PageWrapper.scss"

const PageWrapper = ({ children }) => {
  return (
    <div className="PageWrapper">
      <Header />
      <main>{children}</main>
      <Footer
        avatarUrl="https://avatars2.githubusercontent.com/u/47375524?s=400&u=9c6488c70f08ac60577aff332f10fe50d6cecfd2&v=4"
        githubLink="https://github.com/killi8n"
      />
    </div>
  )
}

export default PageWrapper
