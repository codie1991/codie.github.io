import { Link } from "react-scroll"
import React from "react"
import styled from "styled-components"

const HeaderStyles = styled.header`
  position: fixed;
  background: white;
  width: 100vw;
  z-index: 100;
  display: grid;
  justify-content: center;

  a {
    cursor: pointer;
    transition: color 0.3s;
  }

  .inner {
    width: 100vw;
    max-width: 1000px;
    padding: 2rem;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: auto auto auto;
    justify-content: start;
  }

  .link--active,
  a:hover {
    color: pink;
  }
`

const HeaderPadding = styled.div`
  height: 100px;
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

const Header = () => (
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
    <HeaderPadding />
  </>
)

export default Header
