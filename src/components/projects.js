import React from "react"
import styled from "styled-components"

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
    h1 {
      font-size: 1.5em;
    }
    p {
      font-size: 14px;
    }
  }
`

const BreakDiv = styled.div`
  flex-basis: 100%;
  height: 0;
`

const Projects = () => (
  <ProjectContainer>
    <LeftDiv>
      <h1>SubMe</h1>
    </LeftDiv>
    <RightDiv>
      <p>
        A web application designed to help conect schools with pre-approved
        substitute teachers. Teachers can schedule an absence and notifications
        are instantly sent to any eligible subs.
      </p>
      <p>
        <strong>Built With: </strong> Next.js (React), Node.js, Prisma, GraphQL
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
        <strong>Built With: </strong> Next.js (React), Node.js, Prisma, GraphQL
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
        <strong>Built With: </strong> HTML, CSS, jQuery
      </p>
    </RightDiv>
    <BreakDiv />
  </ProjectContainer>
)

export default Projects
