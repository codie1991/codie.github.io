import React from "react"
import { Element } from "react-scroll"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Element name="work">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Element>
    <Element name="about">
      <h2>About me</h2>
      <p>Some information abut me</p>
      <Image />
    </Element>
    <Element name="contact">
      <h2>About me</h2>
      <p>Some information abut me</p>
      <Image />
    </Element>
  </Layout>
)

export default IndexPage
