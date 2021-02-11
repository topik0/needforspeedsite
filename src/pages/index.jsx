import React from "react"
import { MainContainer, TextBlob } from "../styles/styles.js"
import { Helmet } from "react-helmet"
import { MainDescription, PrimaryTitle } from "../constants/text.js"
import logo from "../images/favicon.png"
import Splash from "../components/Splash"
import About from "../components/About"
import MeetTheTeam from "../components/MeetTheTeam"
import BlueBlob from "../components/BlueBlob"
import CTABlobs from "../components/CTABlobs"
import Footer from "../components/Footer/index.jsx"
import SEO from "../components/SEO/seo.jsx"

export default () => {
  return (
    <MainContainer>
      <SEO
        title="Need For Speed Robotics"
        description={MainDescription}
        image={logo}
      />
      {/* <Helmet>
        <title>Need For Speed Robotics</title>
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
      </Helmet> */}
      <Splash />
      <About />
      <BlueBlob id="meettheteam" width="80%" showText={"Meet The Team"} />
      <MeetTheTeam />
      <TextBlob>
        <div>
          <h1>
            But wait, <br /> there's more!
          </h1>
        </div>
      </TextBlob>
      <CTABlobs />
      <Footer />
    </MainContainer>
  )
}
