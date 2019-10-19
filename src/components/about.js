import React, { Component } from "react"
import styled from "styled-components"
import me_square from "../images/me_square.png"
import twitter from "../images/twitter.svg"
import facebook from "../images/facebook.svg"
import mail from "../images/mail.svg"

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
  margin-bottom: 100px;
`

const LeftDiv = styled.div`
  flex-grow: 1;
  padding-right: 20px;
  border-right: 4px solid #5fa576;
  img {
    max-width: 225px;
    @media (max-width: 700px) {
      max-height: 160px;
    }
  }
`

const RightDiv = styled.div`
  flex-grow: 2;
  color: #555555;
  padding-left: 1rem;
  h1 {
    font-family: "Roboto Slab";
    margin-bottom: -10px;
    font-size: 36px;
  }
  p {
    font-weight: 300;
    font-size: 18px;
  }
  @media (max-width: 700px) {
    h1 {
      font-size: 1.5em;
    }
    p {
      font-size: 14px;
    }
  }
`

const Social = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    max-height: 35px;
    padding-right: 1.2rem;
    @media (max-width: 700px) {
      max-height: 23px;
    }
  }
`

class About extends Component {
  render() {
    return (
      <AboutContainer>
        <LeftDiv>
          <img src={me_square} atl="me" />
        </LeftDiv>
        <RightDiv>
          <h1>Hey there,</h1>
          <p>
            I’m a web designer and developer from Cookeville, TN. Whether it’s
            building a website or coding a full-stack application, I love
            helping others find solutions on the web.
          </p>
        <Social>

          <img src={twitter} alt="twitter" />
          <img src={facebook} alt="facebook" />
          <img src={mail} alt="mail" />
        </Social>
        </RightDiv>
      </AboutContainer>
    )
  }
}

export default About
