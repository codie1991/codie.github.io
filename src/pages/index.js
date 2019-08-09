import React from "react"
import { Element } from "react-scroll"

import Layout from "../components/layout/layout"
import Header from "../components/layout/header"
import Image from "../components/image"
import SEO from "../components/layout/seo"
import Box from "../components/Box"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Element name="work" className="section">
      <Header>
        <h1>Codie Westphall</h1>
        <div>iOS &amp; Android engineer</div>
        <div>based in Auckland, NZ</div>
      </Header>

      <h2>Work</h2>
      <Box margin>
        <div className="title">
          <h3>Timely</h3>
          <h3 className="subtitle">scheduling &amp; point of sale</h3>
        </div>
        <p>
          <div>
            Running day spa's, hair salons, and beauty clinics all over the
            world.
          </div>
          <div>
            Timely is a universal codebase leveraging the most of the iPad and
            iPhone.
          </div>
        </p>

        <h4>Technologies</h4>
        <p>
          Swift, Codable, Custom networking, Customer UI, Bluetooth
          connectivity, Hardware support
        </p>
        <img
          className="full-width"
          src="https://images.unsplash.com/photo-1556909172-8c2f041fca1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
        />
      </Box>
      <Box>
        <div className="title">
          <h3>PocketSmith</h3>
          <h3 className="subtitle">personal finance</h3>
        </div>
        <p>
          <div>
            Running day spa's, hair salons, and beauty clinics all over the
            world.
          </div>
          <div>
            Timely is a universal codebase leveraging the most of the iPad and
            iPhone.
          </div>
        </p>

        <h4>Technologies</h4>
        <p>
          Swift, Codable, Custom networking, Customer UI, Bluetooth
          connectivity, Hardware support
        </p>
        <img
          className="full-width"
          src="https://images.unsplash.com/photo-1556909172-8c2f041fca1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
        />
      </Box>
    </Element>
    <Element name="about" className="section">
      <h2>About</h2>
      <p>Block one</p>
      <p>Block two!</p>
    </Element>
    <Element name="contact" className="section">
      <Box centered>
        <h2>Let's Talk</h2>
        <p>
          Currently open for small contract work. Feel free to get in touch.
        </p>
      </Box>
    </Element>
  </Layout>
)

export default IndexPage
