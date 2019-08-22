import React from "react"
import styled from "styled-components"

const BoxWrapper = styled.div`
  display: grid;
  justify-content: center;
  margin-bottom: 80px;
`

const BoxStyles = styled.div`
  border: 1px solid ${props => props.theme.colorGreyLight};
  border-radius: 20px;
  padding: 40px;
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
    margin: 0 -40px -40px;
    max-width: none;
    width: calc(100% + 80px);
  }
`

const Box = ({ children, margin, centered }) => (
  <BoxWrapper margin={margin}>
    <BoxStyles centered={centered}>{children}</BoxStyles>
  </BoxWrapper>
)

export const SideBySide = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px;
  max-width: 95vw;
`

export default Box
