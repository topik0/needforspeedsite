import React from "react"
import {
  LostContainer,
  LostHolder,
  LostText,
  LostTitle,
} from "../styles/404.js"
import { Helmet } from "react-helmet"
import { MainDescription, PrimaryTitle } from "../constants/text.js"
import logo from "../images/favicon.png"
import Navbar from "../components/Navbar/index.jsx"
import Footer from "../components/Footer/index.jsx"
import SEO from "../components/SEO/seo.jsx"

export default () => {
  return (
    <LostContainer>
      <Helmet>
        <title>Minecraft Server | Need For Speed Robotics</title>
        <meta
          name="description"
          content="Play on the Need For Speed robotics Minecraft server"
        />
      </Helmet>
      {/* <SEO
         title="Minecraft Server | "
        description={`Play on the Need For Speed robotics Minecraft server`}
        image={logo}
      /> */}
      <Navbar center filled />
      <LostHolder>
        <LostTitle size="calc(2vmax + 3vmin)">
          Join our Minecraft server
        </LostTitle>
        <LostText>mc.needforspeedrobotics.org</LostText>
      </LostHolder>
      <Footer />
    </LostContainer>
  )
}
