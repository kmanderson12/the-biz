import React, { Component } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Twitter, Facebook, Mail } from "./icons"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { regex: "/me_square/" }) {
        childImageSharp {
          fluid(maxWidth: 225) {
            src
          }
        }
      }
    }
  `)

  return <Img fluid={data.myImage.childImageSharp.fluid} />
}

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
  min-height: 350px;
  @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;
    max-width: 500px;
  }
`

const LeftDiv = styled.div`
  flex-grow: 1;
  padding-right: 20px;
  border-right: 4px solid #5fa576;
  @media (max-width: 700px) {
    border: none;
    border-bottom: 2px solid #5fa576;
    padding: 0;
  }
  .gatsby-image-wrapper {
    height: 225px;
    width: 225px;
    @media (max-width: 700px) {
      height: 160px;
      width: 160px;
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
    line-height: 33px;
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
    padding: 0 1rem;
  }
`

const Social = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 700px) {
    justify-content: center;
  }
  a {
    padding-right: 1.2rem;
  }
  svg {
    max-height: 35px;
    :hover {
      fill: #5fa576ab;
    }
    @media (max-width: 700px) {
      max-height: 23px;
    }
  }
  a:last-child {
    padding: 0;
  }
`

class About extends Component {
  render() {
    return (
      <AboutContainer>
        <LeftDiv>
          <Image />
        </LeftDiv>
        <RightDiv>
          <h1>Hey there,</h1>
          <p>
            I’m a web designer and developer from Cookeville, TN. Whether it’s
            building a website or coding a full-stack application, I love
            helping others find solutions on the web.
          </p>
          <Social>
            <a
              target="_blank"
              rel="noopener"
              href="http://www.twitter.com/kyle_codes"
            >
              <Twitter />
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="http://www.facebook.com/kmanderson12"
            >
              <Facebook />
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="mailto:kmanderson12@gmail.com"
            >
              <Mail />
            </a>
          </Social>
        </RightDiv>
      </AboutContainer>
    )
  }
}

export default About
