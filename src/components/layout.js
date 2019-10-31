/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./header"
import "./layout.css"
import "./normalize.css"

const GlobalStyle = createGlobalStyle`
  body {
    color: #555555;
  }
`

const ContactSection = styled.div`
  margin: 0 auto;
  max-width: 500px;
  color: #555555;
  @media (max-width: 700px) {
    max-width: 400px;
  }
  h2 {
    font-family: "Roboto Slab";
    font-size: 24px;
    margin-bottom: -10px;
  }
  p {
    font-weight: 300;
    font-size: 18px;
  }
  form {
    margin: 0 auto;
    label {
      display: block;
      font-family: "Roboto Slab";
      color: #555555;
      font-size: 14px;
    }
    input,
    textarea {
      display: block;
      font-family: "Montserrat";
      box-sizing: border-box;
      color: #555555;
      border: 1px solid rgba(0, 0, 0, 0.8);
      border-radius: 0;
      width: 100%;
      margin-bottom: 20px;
      padding: 5px;
      ::placeholder {
        font-family: "Montserrat";
        font-weight: 300;
        font-size: 12px;
        /* font-style: italic; */
      }
    }
    input {
      height: 36px;
    }
    button {
      display: block;
      background: rgba(0, 0, 0, 0.6);
      color: white;
      font-family: "Roboto Slab";
      padding: 1rem;
      font-weight: 700;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 2px;
      border: none;
      cursor: pointer;
    }
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main
          style={{
            minHeight: "400px",
          }}
        >
          {children}
        </main>
        <hr
          style={{
            border: "1px solid rgba(95, 165, 118, 0.26)",
          }}
        />
        <ContactSection>
          <h2 id="contact-me">Need a website?</h2>
          <p>I’m currently accepting clients and would love to talk.</p>
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="name">
              Name
              <input type="text" name="name" />
            </label>
            <label htmlFor="email">
              Email
              <input type="email" name="email" />
            </label>
            <label htmlFor="info">
              Message
              <textarea
                name="info"
                rows="5"
                placeholder="Share a little bit about the potential project or website."
              />
            </label>
            <button type="submit">Contact Me</button>
          </form>
        </ContactSection>
        <footer
          style={{
            textAlign: "center",
            fontSize: "12px",
            opacity: "0.7",
            marginTop: "50px",
          }}
        >
          © {new Date().getFullYear()}, Kyle Anderson
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
