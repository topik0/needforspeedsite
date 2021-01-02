import React, { Component } from "react"
import {
  AboutContainer,
  LeftContainer,
  AboutTitle,
  AboutPara,
  BulletPointContainer,
  RightContainer,
  AboutLogo,
  LogoCaption,
} from "../About/About.js"
import { AboutBio, LogoComment } from "../../constants/text"
import logoWhite from "../../../static/logo-white.svg"
import BulletPoint from "../BulletPoint/BulletPoint.jsx"
import { bulletpoints } from "../../constants/bulletpoints"

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <AboutContainer>
        <LeftContainer>
          <AboutTitle>Who are we?</AboutTitle>
          <AboutPara>{AboutBio}</AboutPara>
          <BulletPointContainer>
            {bulletpoints.map(content => (
              <BulletPoint content={content} />
            ))}
          </BulletPointContainer>
        </LeftContainer>
        <RightContainer>
          <AboutLogo src={logoWhite} />
          <LogoCaption>{LogoComment}</LogoCaption>
        </RightContainer>
      </AboutContainer>
    )
  }
}
export default About
