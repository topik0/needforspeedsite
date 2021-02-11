import React from "react"
import { MainContainer, TextBlob } from "../styles/styles.js"
import { Helmet } from "react-helmet"
import { MainDescription, PrimaryTitle, SponsorEmail } from "../constants/text.js"
import logo from "../images/favicon.png"
import Footer from "../components/Footer/index.jsx"
import Navbar from "../components/Navbar/index.jsx"
import SponsorComponent from "../components/SponsorComponent/index.jsx"
import { sponsors } from "../constants/Sponsors"
import { SponsorHolder } from "../styles/sponsors.js"

export default () => {
  return (
    <MainContainer>
      <Helmet>
        <title>Sponsorships {PrimaryTitle}</title>
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
      <Navbar page="Sponsorships" />
      <TextBlob topMarg="6em" topMargMobile="14em">
        <div>
          <h1>Our Sponsors</h1>
          <a href={SponsorEmail}>Learn more about sponsorships</a>
        </div>
      </TextBlob>
      <SponsorHolder>
        {sponsors.map(spon => (
          <SponsorComponent
            bio={spon.bio}
            logo={spon.logo}
            website={spon.website}
          />
        ))}
      </SponsorHolder>
      <Footer />
    </MainContainer>
  )
}
