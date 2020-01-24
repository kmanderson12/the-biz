import React from "react"
import styled from "styled-components"
import { Github, Codepen } from "../components/icons"

const Projects = () => (
  <ProjectContainer>
    <LeftDiv>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://subme-design.now.sh/account"
      >
        <h1>SubMe</h1>
      </a>
    </LeftDiv>
    <RightDiv>
      <p>
        A web application designed to help connect schools with pre-approved
        substitute teachers. Teachers can schedule an absence and notifications
        are instantly sent to any eligible subs.{" "}
        <strong>Work-In-Progress</strong>
      </p>
      <p>
        <strong>Built With: </strong> Next.js (React), Apollo, GraphQL, Hasura,
        Twilio API
      </p>
    </RightDiv>
    <BreakDiv />
    <LeftDiv>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://sickfits-kma-prd.herokuapp.com"
      >
        <h1>Sick Fits</h1>
      </a>
    </LeftDiv>
    <RightDiv>
      <p>
        An example ecommerce website. Includes a shopping cart and product
        management system built from scratch. Also supports credit card
        processing using the Stripe API. This was built during a guided tutorial
        by Wes Bos.
      </p>
      <p>
        <strong>Built With: </strong> Next.js (React), Node.js, Prisma, GraphQL,
        Stripe API
      </p>
    </RightDiv>
    <BreakDiv />
    <LeftDiv>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://ka-js-calc.netlify.com/"
      >
        <h1>jsCalc()</h1>
      </a>
    </LeftDiv>
    <RightDiv>
      <p>
        A vanilla JavaScript calculator I built for a freeCodeCamp project back
        in 2017. This was a fun opportunity to put into practice some of the
        foundations I learned. (View source on the JS file for a laugh.)
      </p>
      <p>
        <strong>Built With: </strong> HTML, CSS, JavaScript
      </p>
    </RightDiv>
    <BreakDiv />
    <LeftDiv>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://pastoraltweets.netlify.com/"
      >
        <h1>
          Pastoral
          <br />
          Tweets
        </h1>
      </a>
    </LeftDiv>
    <RightDiv>
      <p>
        A fun random tweet generator inspired by The Happy Rant podcast.
        Randomly create an insightful (or illogical) thought for you to tweet.
      </p>
      <p>
        <strong>Built With: </strong> HTML, CSS, jQuery, Twitter API
      </p>
    </RightDiv>
    <BreakDiv />
    <CenterDiv>
      <h3>For more projects, check out my developer profiles:</h3>
      <ButtonWrapper>
        <IconButton target="_blank" rel="noopener noreferrer" href="https://www.github.com/kmanderson12" >
          <Github />
          GitHub
        </IconButton>
        <IconButton target="_blank" rel="noopener noreferrer" href="https://codepen.io/kmanderson12" >
          <Codepen />
          Codepen
        </IconButton>
      </ButtonWrapper>
    </CenterDiv>
  </ProjectContainer>
)

export default Projects

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
  min-height: 350px;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-direction: column;
    text-align: center;
    max-width: 500px;
  }
  margin-bottom: 20px;
`

const LeftDiv = styled.div`
  flex-grow: 1;
  border-right: 4px solid #5fa576;
  font-family: "Roboto Slab";
  text-align: center;
  a {
    text-decoration: none;
    color: #555555;
    :hover {
      color: #555555ab;
    }
  }
  h1 {
    line-height: 33px;
    font-size: 30px;
    color: #555555;
  }
  @media (max-width: 800px) {
    border: none;
    border-bottom: 2px solid #5fa576;
    padding: 0;
  }
  img {
    max-width: 150px;
    @media (max-width: 700px) {
      max-height: 160px;
    }
  }
`

const RightDiv = styled.div`
  flex-grow: 2;
  color: #555555;
  padding-left: 1rem;
  max-width: 580px;
  h1 {
    font-family: "Roboto Slab";
    margin-bottom: -10px;
    font-size: 36px;
  }
  p {
    font-weight: 300;
    font-size: 14px;
  }
  @media (max-width: 800px) {
    padding-left: 0;
    h1 {
      font-size: 1.5em;
    }
    p {
      font-size: 14px;
    }
  }
`

const CenterDiv = styled.div`
  margin: 2rem auto;
  padding: 0.5rem 1rem;
  background: #edf2f7;
  border-radius: 3px;
  border: 2px solid rgba(95, 165, 118, 0.47);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    font-size: 14px;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const IconButton = styled.a`
  background: #555555;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-family: "Roboto Slab";
  padding: 8px 15px;
  font-weight: 400;
  letter-spacing: 1px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin: 0.5rem;
  text-decoration: none;
  > * {
    margin: 0 0.3rem;
  }
  :hover {
    background: #555555db;
  }
`

const BreakDiv = styled.div`
  flex-basis: 100%;
  height: 0;
`
