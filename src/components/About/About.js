import styled from "styled-components"

export const AboutContainer = styled.div`
  display: flex;
  width: 85%;
  justify-content: space-evenly;
`
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 42%;
  margin-left: -200px;
`
export const AboutTitle = styled.p`
  font-size: 80px;
  color: white;
  font-weight: 700;
  text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
`
export const AboutPara = styled.p`
  font-family: "Pier Sans", sans-serif;
  font-size: 34px;
  font-weight: 300;
  color: white;
  text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
  margin-bottom: 15px;
`
export const BulletPointContainer = styled.div`
  margin-top: 20px;
`
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  margin-left: -30px;
`
export const AboutLogo = styled.img`
  width: 500px;
  height: auto;
`
export const LogoCaption = styled.p`
  font-family: "Pier Sans", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 300;
  font-size: 25px;
`
