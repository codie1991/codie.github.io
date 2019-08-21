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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props => props.theme.fontFancy};
  }

  a {
    text-decoration: none;
    border-bottom: ${props => props.theme.colorBrand} solid 4px;
  }

  .section {
    margin-bottom: 3rem;
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
