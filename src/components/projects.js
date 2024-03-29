import React from "react"
import styled from "styled-components"
import { Github, Codepen } from "../components/icons"

const Projects = () => (
  <ProjectsContainer>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://puttpro.vercel.app"
    >
      <Wrapper>
        <LeftDiv>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://puttpro.vercel.app"
          >
            <h1>PuttPro</h1>
          </a>
        </LeftDiv>
        <RightDiv>
          <p>
            A hobby project I’m currently working on. This app is a fun way to
            keep my dev skills sharp and (hopefully) improve my disc golf game
            while I’m at it. My goal is to use it to track my putting progress
            over time and keep notes about my form.
          </p>
          <p>
            <strong>Built With: </strong> Next.js (React) / Chakra UI / MongoDB
          </p>
        </RightDiv>
      </Wrapper>
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://dueonrepeat.now.sh/"
    >
      <Wrapper>
        <LeftDiv>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://dueonrepeat.now.sh/"
          >
            <DueText>
              <span className="medium">due</span>
              <span className="light">on</span>repeat
            </DueText>
          </a>
        </LeftDiv>
        <RightDiv>
          <p>
            A sample app that tracks recurring income and expenses. For this
            project, I took the opportunity to dive deep on some advanced React
            concepts and built a Redux-like global store using Hooks and
            Context.
          </p>
          <p>
            <strong>Built With: </strong> Next.js (React), styled-components,
            React Hooks and Context
          </p>
        </RightDiv>
      </Wrapper>
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://subme-design.now.sh/account"
    >
      <Wrapper>
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
            substitute teachers. Teachers can schedule an absence and
            notifications are instantly sent to any eligible subs.{" "}
            <strong>Work-In-Progress</strong>
          </p>
          <p>
            <strong>Built With: </strong> Next.js (React), Apollo, GraphQL,
            Hasura, Twilio API
          </p>
        </RightDiv>
      </Wrapper>
    </a>
    <BreakDiv />
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://sickfits-kma-prd.herokuapp.com"
    >
      <Wrapper>
        <LeftDiv>
          <h1>Sick Fits</h1>
        </LeftDiv>
        <RightDiv>
          <p>
            An example ecommerce website. Includes a shopping cart and product
            management system built from scratch. Also supports credit card
            processing using the Stripe API. This was built during a guided
            tutorial by Wes Bos.
          </p>
          <p>
            <strong>Built With: </strong> Next.js (React), Node.js, Prisma,
            GraphQL, Stripe API
          </p>
        </RightDiv>
      </Wrapper>
    </a>
    <BreakDiv />
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://ka-js-calc.netlify.com/"
    >
      <Wrapper>
        <LeftDiv>
          <h1>jsCalc()</h1>
        </LeftDiv>
        <RightDiv>
          <p>
            A vanilla JavaScript calculator I built for a freeCodeCamp project
            back in 2017. This was a fun opportunity to put into practice some
            of the foundations I learned. (View source on the JS file for a
            laugh.)
          </p>
          <p>
            <strong>Built With: </strong> HTML, CSS, JavaScript
          </p>
        </RightDiv>
      </Wrapper>
    </a>
    <BreakDiv />
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://pastoraltweets.netlify.com/"
    >
      <Wrapper>
        <LeftDiv>
          <h1>Pastoral Tweets</h1>
        </LeftDiv>
        <RightDiv>
          <p>
            A fun random tweet generator inspired by The Happy Rant podcast.
            Randomly create an insightful (or illogical) thought for you to
            tweet.
          </p>
          <p>
            <strong>Built With: </strong> HTML, CSS, jQuery, Twitter API
          </p>
        </RightDiv>
      </Wrapper>
    </a>
    <BreakDiv />
    <CenterDiv>
      <h3>For more projects, check out my developer profiles:</h3>
      <ButtonWrapper>
        <IconButton
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.github.com/kmanderson12"
        >
          <Github />
          GitHub
        </IconButton>
        <IconButton
          target="_blank"
          rel="noopener noreferrer"
          href="https://codepen.io/kmanderson12"
        >
          <Codepen />
          Codepen
        </IconButton>
      </ButtonWrapper>
    </CenterDiv>
  </ProjectsContainer>
)

export default Projects

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
  min-height: 350px;
  flex-wrap: wrap;
  @media (max-width: 830px) {
    flex-direction: column;
    text-align: center;
    max-width: 500px;
    padding: 0;
  }
  margin-bottom: 20px;
  > a {
    width: 100%;
    text-decoration: none;
    color: #555555;
    :hover {
      color: #555555ab;
    }
  }
`

const Wrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 1rem;
  flex-wrap: wrap;
  transition: all 0.3s;
  :hover {
    background: #edf2f7;
    cursor: pointer;
  }
  @media (max-width: 830px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    max-width: 500px;
    padding: 0;
  }
`

const LeftDiv = styled.div`
  flex-grow: 1;
  border-right: 4px solid #5fa576;
  font-family: "Roboto Slab";
  text-align: center;
  max-width: 196px;
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
  @media (max-width: 830px) {
    border: none;
    border-bottom: 2px solid #5fa576;
    padding: 0 0.5rem 0 0;
    text-align: left;
    margin-left: 0.5rem;
    max-width: inherit;
    h1 {
      margin-bottom: 0.5rem;
    }
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
    a {
      text-decoration: none;
      font-weight: 500;
      color: #555555;
      :hover {
        color: #555555ab;
      }
    }
  }
  @media (max-width: 830px) {
    padding: 0 0.5rem;
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
  flex-wrap: wrap;
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
    color: white;
  }
  :hover {
    background: #555555db;
  }
`

const BreakDiv = styled.div`
  flex-basis: 100%;
  height: 0;
`
const DueText = styled.h1`
  span.light {
    font-weight: 300;
  }
  span.medium {
    font-weight: 400;
  }
`
