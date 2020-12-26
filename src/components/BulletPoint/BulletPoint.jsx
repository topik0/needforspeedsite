import React, { Component } from "react"
import { BulletContainer, Circle, Content } from "../BulletPoint/BulletPoint.js"
import waves from "../../../static/blue-waves-4.svg"

class BulletPoint extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <BulletContainer>
        <Circle />
        <Content>{this.props.content}</Content>
      </BulletContainer>
    )
  }
}
export default BulletPoint
