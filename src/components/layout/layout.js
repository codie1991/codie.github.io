/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import theme from "./theme"
import "./layout.css"

const LayoutStyles = styled.div`
  font-family: sans-serif;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: georgia, serif;
  }

  .section {
    margin-bottom: 3rem;
  }

  .title {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 0.5rem;
    justify-content: start;

    .subtitle {
      color: ${props => props.theme.lightGrey};
      font-family: ${props => props.theme.fontSans};
      font-weight: normal;
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
    <ThemeProvider theme={theme}>
      <LayoutStyles>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 2rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </LayoutStyles>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
