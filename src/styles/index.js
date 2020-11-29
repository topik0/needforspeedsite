import styled from "styled-components"

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: black;
`
export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 40%;
  width: 70%;
`
export const MainTitle = styled.p`
  font-family: "Pier Sans", sans-serif;
  font-size: 70px;
  @media (orientation: portrait) {
    font-size: 60px;
  }
  color: white;
  margin-top: 20px;
  text-align: center;
  font-weight: 400;
`
export const MainLogo = styled.img`
  width: 40%;
  @media (orientation: portrait) {
    width: 110%;
  }
  height: auto;
  user-select: none;
`
