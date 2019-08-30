import { Link } from "react-scroll"
import React from "react"
import styled from "styled-components"

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
    grid-template-columns: auto auto auto;
    justify-content: start;
    font-family: ${props => props.theme.fontFancy};
    font-size: 24px;
    font-weight: bold;
  }

  .link--active,
  a:hover {
    color: ${props => props.theme.colorBrand};
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

const Header = ({ children }) => (
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
      </div>
    </HeaderStyles>
    <HeaderContent>{children}</HeaderContent>
  </>
)

export default Header
