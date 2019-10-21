import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

const LayoutHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 20px;
  font-family: "Roboto Slab";
  .site-title {
    background: white;
    z-index: 2;
    h1 {
      color: #555555;
      font-weight: 300;
      font-size: 36px;
      line-height: 46px;
    }
    h1 > span.last-name {
      color: #5fa576;
    }
  }
  .site-nav {
    background: white;
    z-index: 2;
    max-width: 315px;
    margin: 0 auto;
    position: relative;
    top: -16px;
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      font-size: 20px;
      line-height: 26px;
      a {
        color: #555555;
        text-decoration: none;
        padding: 0 1.15rem;
        @media (max-width: 350px) {
          padding: 0 0.8rem;
        }
        li {
          display: inline;
        }
        li:first-child {
          padding-left: 0.1rem;
        }
        li:last-child {
          padding-right: 0.1rem;
        }
      }
    }
  }
`

const OutlineBox = styled.div`
  border: 1px solid #5fa576;
  position: relative;
  width: 344px;
  height: 42px;
  top: -70px;
  margin: 0 auto;
  @media (max-width: 350px) {
    width: 300px;
  }
`

const Header = ({ siteTitle }) => (
  <header>
    <LayoutHeader>
      <div className="site-title">
        <h1>
          kyle<span className="last-name">anderson</span>
        </h1>
      </div>
      <div className="site-nav">
        <ul>
          <Link to="/">
            <li>about</li>
          </Link>
          <Link to="/projects">
            <li>projects</li>
          </Link>
          <Link to="#contact-me">
            <li>contact</li>
          </Link>
        </ul>
      </div>
      <OutlineBox />
    </LayoutHeader>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
