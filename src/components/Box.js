import React from "react"
import styled from "styled-components"

const BoxWrapper = styled.div`
  display: grid;
  justify-content: center;
  margin-bottom: ${props => (props.margin ? "2rem" : "0")};
`

const BoxStyles = styled.div`
  border: 1px solid ${props => props.theme.lightGrey};
  border-radius: 5px;
  padding: 1.5rem;
  width: 95vw;
  max-width: 1000px;
  overflow: hidden;
  display: grid;
  justify-items: ${props => (props.centered ? "center" : "start")};
  text-align: ${props => (props.centered ? "center" : "left")};

  img {
    display: block;
    margin: 0;
  }

  .full-width {
    margin: 0 -1.5rem -1.5rem;
    max-width: none;
    width: calc(100% + 3rem);
  }
`

const Box = ({ children, margin, centered }) => (
  <BoxWrapper margin={margin}>
    <BoxStyles centered={centered}>{children}</BoxStyles>
  </BoxWrapper>
)

export default Box
