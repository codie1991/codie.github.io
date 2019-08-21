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

  a {
    cursor: pointer;
    transition: color 0.3s;
    color: ${props => props.theme.colorGreyLight};
    border-bottom: none;
  }

  .inner {
    width: 100vw;
    max-width: 1000px;
    padding: 1rem 2rem;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: auto auto auto;
    justify-content: start;
  }

  .link--active,
  a:hover {
    color: ${props => props.theme.colorBrand};
  }
`

const HeaderContent = styled.div`
  padding-top: 150px;
  padding-bottom: 200px;
  color: ${props => props.theme.colorGreyLight};

  h1 {
    color: ${props => props.theme.colorGreyDark};
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
