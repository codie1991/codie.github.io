import { Link } from "react-scroll"
import React from "react"
import styled from "styled-components"

import Images from "../Images"

const HeaderStyles = styled.header`
  position: fixed;
  left: 0;
  background: white;
  width: 100vw;
  z-index: 100;
  display: grid;
  justify-content: center;

  a,
  .link {
    cursor: pointer;
    transition: color 0.3s;
    color: ${props => props.theme.colorGreyLight};
    border-bottom: none;
  }

  .inner {
    width: 100vw;
    max-width: ${props => props.theme.maxWidth};
    padding: 40px 40px;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: auto auto auto 50px;
    justify-content: start;
    font-family: ${props => props.theme.fontFancy};
    font-size: 24px;
    font-weight: bold;
    position: relative;
  }

  .link--active,
  a:hover {
    color: ${props => props.theme.colorBrand};
  }

  .header__image {
    height: 100%;
    justify-self: end;
    width: 80px;
    position: absolute;
    display: grid;
    align-items: center;
    right: 40px;
  }

  @media screen and (max-width: ${props => props.theme.breakpointSmall}) {
    bottom: 0;

    .inner {
      padding: 20px;
      justify-content: center;
      font-size: 20px;
    }
  }
`

const HeaderContent = styled.div`
  padding: 100px ${props => props.theme.padding} 130px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;

  .header__grid {
    display: grid;
  }
  .header__image {
    grid-row: 1;
  }

  @media screen and (min-width: ${props => props.theme.breakpointSmallMin}) {
    padding-top: 200px;

    .header__grid {
      grid-template-columns: auto 250px;
      grid-gap: 100px 1rem;
    }

    .header__subtitle {
      grid-column: 1 / span 2;
    }

    .header__image {
      grid-column: 2;
      grid-row: 1;
    }
  }
`

const HeaderLink = ({ to, children }) => (
  <Link
    activeClass="link--active"
    className="link"
    to={to}
    offset={-200}
    spy={true}
    smooth={true}
  >
    {children}
  </Link>
)

const Header = ({ children }) => {
  return (
    <>
      <HeaderStyles>
        <div className="inner">
          <div className="cell">
            <HeaderLink to="work">Work</HeaderLink>
          </div>
          <div className="cell">
            <HeaderLink to="about">About</HeaderLink>
          </div>
          <div className="cell">
            <HeaderLink to="contact">Contact</HeaderLink>
          </div>
          <div className="header__image">
            <Images.Avatar maxWidth={80} />
          </div>
        </div>
      </HeaderStyles>
      <HeaderContent>
        <div className="header__grid">
          <div className="header__title">
            <h1>Codie Westphall</h1>
            <h2 className="subtitle">
              iOS &amp; Android engineer
              <br />
              based in Auckland, NZ
            </h2>
          </div>
          <div className="header__subtitle">
            <h3>
              Currently working at{" "}
              <a
                href="https://www.gettimely.com/"
                target="_blank"
                rel="nofollower noopener noreferrer"
              >
                Timely
              </a>
              .
            </h3>
            <h3>
              Open for contract work,{" "}
              <Link to="contact" smooth="true" style={{ cursor: "pointer" }}>
                get in touch.
              </Link>
            </h3>
          </div>
          <div className="header__image">
            <Images.Avatar maxWidth={300} />
          </div>
        </div>
      </HeaderContent>
    </>
  )
}

export default Header
