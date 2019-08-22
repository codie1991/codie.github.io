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
import Helmet from "react-helmet"

import theme from "./theme"
import "./layout.css"

const LayoutStyles = styled.div`
  font-family: ${props => props.theme.fontBody};
  font-size: 16px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    font-family: ${props => props.theme.fontFancy};
  }

  h1 {
    font-size: 60px;
  }

  h2 {
    font-size: 48px;
  }

  h2.subtitle {
    font-family: ${props => props.theme.fontBody};
    font-weight: lighter;
    font-size: 36px;
    color: ${props => props.theme.colorGreyLight};
  }

  h3 {
    font-weight: normal;
    font-size: 36px;
  }

  h4 {
    font-family: ${props => props.theme.fontBody};
    font-weight: normal;
    font-size: 21px;
    color: ${props => props.theme.colorGreyLight};
  }

  h5 {
    font-size: 21px;
    color: ${props => props.theme.colorGreyLight};
  }

  .u-uppercase {
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
    border-bottom: ${props => props.theme.colorBrand} solid 4px;
  }

  a:visited {
    color: unset;
  }

  p {
    max-width: 720px;
  }

  .section {
    margin-bottom: 80px;
  }

  .section--last {
    margin-bottom: 30vh;
  }

  .underlined {
    display: block;
    border-bottom: solid 4px ${props => props.theme.colorBrand};
  }

  .title {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 0.5rem;
    justify-content: start;

    .subtitle {
      color: ${props => props.theme.colorGreyLight};
      font-family: ${props => props.theme.fontBody};
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
        <Helmet>
          <link rel="stylesheet" href="https://use.typekit.net/ftv1pwn.css" />
        </Helmet>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 2rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
      </LayoutStyles>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
