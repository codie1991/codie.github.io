import { Link } from "react-scroll"
import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import { useMagicSizes, useMagicSizesSetup } from "../../hooks/useMagicSizes"
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
    height: 105px;
    padding: 0 40px;
    max-width: ${props => props.theme.maxWidth};
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: auto auto auto 1fr;
    justify-content: start;
    font-family: ${props => props.theme.fontFancy};
    font-size: 24px;
    font-weight: bold;
    align-items: center;
  }

  .link--active,
  a:hover {
    color: ${props => props.theme.colorBrand};
  }

  .header__image {
    height: 100%;
    justify-self: end;
    width: 80px;
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
      grid-template-columns: auto auto auto;
    }

    .header__image {
      display: none;
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

  .header__image--mobile {
    display: block;
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

    .header__image--mobile {
      display: none;
    }
  }
`
const Child = styled(motion.div)`
  position: absolute;
  z-index: 10;
`

const Avatar = ({ dimensions }) => {
  const { width, height, top, left } = useMagicSizes({
    dimensions,
    distance: 250,
  })
  return (
    <Child
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ width, height, top, left }}
    >
      <Images.Avatar maxWidth={300} />
    </Child>
  )
}

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
  const { outerRef, startRef, endRef, dimensions } = useMagicSizesSetup()

  return (
    <>
      <HeaderStyles ref={outerRef}>
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
          <div
            className="header__image"
            ref={endRef}
            style={{ width: 80, height: 80 }}
          >
            {dimensions && <Avatar dimensions={dimensions} />}
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
          <div className="header__image" ref={startRef}>
            <div className="header__image--mobile">
              <Images.Avatar maxWidth={300} />
            </div>
          </div>
        </div>
      </HeaderContent>
    </>
  )
}

export default Header
