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

export default () => {
  return (
    <LostContainer>
      <Helmet>
        <title>Minecraft Server {PrimaryTitle}</title>
        <meta name="description" content={MainDescription} />
        <meta name="theme-color" content="#190061" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://needforspeedrobotics.org" />
        <meta
          property="og:title"
          content={`Minecraft Server - Need For Speed Robotics`}
        />
        <meta
          property="og:description"
          content={`Play on the Need For Speed robotics Minecraft server`}
        />
        <meta property="og:image" content={logo} />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://needforspeedrobotics.org"
        />
        <meta
          property="twitter:title"
          content={`Minecraft Server - Need For Speed Robotics`}
        />
        <meta
          property="twitter:description"
          content={`Play on the Need For Speed robotics Minecraft server`}
        />
        <meta property="twitter:image" content={logo} />
      </Helmet>
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
