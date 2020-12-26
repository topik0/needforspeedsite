import styled from "styled-components"
import { Link } from "gatsby"

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 11vh;
  position: absolute;
  top: 0;
  z-index: 1;
`
export const InnerNavbarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
`
export const LinksDiv = styled.div`
  display: flex;
`
export const NavLink = styled(Link)`
  font-size: 26px;
  margin-left: 35px;
  text-decoration: none;
  color: white;
  font-weight: ${props => (props.sel ? "600" : "300")};
  &:hover {
    color: #e6e6e6;
  }
`
export const Logo = styled.img`
  width: 135px;
`
