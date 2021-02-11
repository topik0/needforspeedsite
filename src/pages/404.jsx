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
        <title>404 - {PrimaryTitle}</title>
        <meta name="description" content={MainDescription} />
        <meta name="theme-color" content="#190061" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://needforspeedrobotics.org" />
        <meta property="og:title" content={`404 - NFS Robotics`} />
        <meta
          property="og:description"
          content={`The page you are looking for does not exist`}
        />
        <meta property="og:image" content={logo} />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://needforspeedrobotics.org"
        />
        <meta property="twitter:title" content={`404 - NFS Robotics`} />
        <meta
          property="twitter:description"
          content={`The page you are looking for does not exist`}
        />
        <meta property="twitter:image" content={logo} />
      </Helmet>
      <Navbar center filled />
      <LostHolder>
        <LostTitle>404</LostTitle>
        <LostText>The page you are looking for does not exist</LostText>
      </LostHolder>
      <Footer/>
    </LostContainer>
  )
}
