import React, { Component } from "react"
import {
  NavbarContainer,
  NavLink,
  Logo,
  LinksDiv,
  InnerNavbarContainer,
} from "../Navbar/Navbar"
import NavbarLinks from "../../constants/NavbarLinks.js"
import logoSrc from "../../../static/logo-white.svg"

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <NavbarContainer>
        <InnerNavbarContainer>
          <Logo src={logoSrc} />
          <LinksDiv>
            {NavbarLinks.map(link => (
              <NavLink sel={this.props.page === link.label} to={link.url}>
                {link.label}
              </NavLink>
            ))}
          </LinksDiv>
        </InnerNavbarContainer>
      </NavbarContainer>
    )
  }
}
export default Navbar
