import React, { Component } from "react"
import { BulletContainer, Circle, Content } from "../BulletPoint/BulletPoint.js"
import waves from "../../../static/blue-waves-4.svg"
import { BlobContainer } from "./AboutBlob.js"

class AboutBlob extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <BlobContainer>
          <Blob src={`../../../static/blob-${this.state.index}`}/>
      </BlobContainer>
    )
  }
}
export default AboutBlob
