import styled from "styled-components"

export const MainContainer = styled.div`
  font-family: "Josefin Sans", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 200vh;
  background-color: #121212;
  z-index: -1;
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
  font-size: 105px;
  @media (orientation: portrait) {
    font-size: 60px;
  }
  color: white;
  font-weight: 700;
  text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
`
export const Subtitle = styled.p`
  font-size: 45px;
  @media (orientation: portrait) {
    font-size: 60px;
  }
  color: white;
  font-weight: 300;
  margin-top: 10px;
  width: 60%;
  text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
`
export const MainLogo = styled.img`
  width: 40%;
  @media (orientation: portrait) {
    width: 110%;
  }
  height: auto;
  user-select: none;
`
export const FirstGradient = styled.img`
  top: 0;
  width: 82%;
  height: auto;
  position: absolute;
  right: 0;
  z-index: 0;
`
export const TextDiv = styled.div`
  width: 80%;
  height: 70%;
`
export const SplashDiv = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 55vh;
  width: 60%;
`
