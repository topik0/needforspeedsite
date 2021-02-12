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
      <Helmet>
        <meta
          name="description"
          content="We are Need For Speed, the FTC robotics team from Lake Forest, Illinois"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href="../../images/meta-icons/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="../../images/meta-icons/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="../../images/meta-icons/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="../../images/meta-icons/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="60x60"
          href="../../images/meta-icons/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href="../../images/meta-icons/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="76x76"
          href="../../images/meta-icons/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="../../images/meta-icons/apple-touch-icon-152x152.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="../../images/meta-icons/favicon-196x196.png"
          sizes="196x196"
        />
        <link
          rel="icon"
          type="image/png"
          href="../../images/meta-icons/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href="../../images/meta-icons/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="../../images/meta-icons/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="../../images/meta-icons/favicon-128.png"
          sizes="128x128"
        />
        <meta name="application-name" content="&nbsp;" />
        <meta name="msapplication-TileColor" content="#121212" />
        <meta
          name="msapplication-TileImage"
          content="../../images/meta-icons/mstile-144x144.png"
        />
        <meta
          name="msapplication-square70x70logo"
          content="../../images/meta-icons/mstile-70x70.png"
        />
        <meta
          name="msapplication-square150x150logo"
          content="../../images/meta-icons/mstile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="../../images/meta-icons/mstile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="../../images/meta-icons/mstile-310x310.png"
        />
      </Helmet>
      {/* <SEO
        description="We are Need For Speed, the FTC robotics team from Lake Forest, Illinois"
      /> */}
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
