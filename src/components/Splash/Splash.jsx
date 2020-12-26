import React, { Component } from "react"
import {
  SplashContainer,
  MainTitle,
  FirstGradient,
  SplashDiv,
  Subtitle,
  TextDiv,
} from "../Splash/Splash.js"
import Navbar from "../Navbar/Navbar.jsx"
import waves from "../../../static/blue-waves-4.svg"

class Splash extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <SplashContainer>
        <Navbar page={"Home"} />
        <SplashDiv>
          <TextDiv>
            <MainTitle>
              We are <br />
              Need For Speed
            </MainTitle>
            <Subtitle>
              The FTC robotics team from Lake Forest, Illinois
            </Subtitle>
          </TextDiv>
        </SplashDiv>
        <FirstGradient src={waves} />
      </SplashContainer>
    )
  }
}
export default Splash
