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
