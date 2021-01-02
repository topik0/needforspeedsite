import React from "react"
import { MainContainer } from "../styles/index.js"
import { Helmet } from "react-helmet"
import { MainDescription, PrimaryTitle } from "../constants/text.js"
import logo from "../../static/favicon.png"
import Splash from "../components/Splash/Splash.jsx"
import About from "../components/About/About.jsx"
import MeetTheTeam from "../components/MeetTheTeam/MeetTheTeam.jsx"


export default () => {
  return (
    <MainContainer>
      <Helmet>
        <title>{PrimaryTitle}</title>
        <meta name="description" content={MainDescription} />
        <meta name="theme-color" content="#190061" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://needforspeedrobotics.org" />
        <meta property="og:title" content={PrimaryTitle} />
        <meta property="og:description" content={MainDescription} />
        <meta property="og:image" content={logo} />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://needforspeedrobotics.org"
        />
        <meta property="twitter:title" content={PrimaryTitle} />
        <meta property="twitter:description" content={MainDescription} />
        <meta property="twitter:image" content={logo} />
      </Helmet>
      <Splash />
      <About />
      <MeetTheTeam/>
    </MainContainer>
  )
}
