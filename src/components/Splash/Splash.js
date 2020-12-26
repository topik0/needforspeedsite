import styled from "styled-components"

export const SplashContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  padding-bottom: 500px;
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
  margin-top: 200px;
`
