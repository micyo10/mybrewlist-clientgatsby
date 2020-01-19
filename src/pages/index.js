import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Hi people</h1>
      <p>This site holds a personal list of breweries I have been to.</p>
      <p>I mainly wanted an easy way to sort through local breweries that meet the following criteria:</p>
      <ul>
        <li>Dog friendly</li>
      </ul>
      <p>Hope this list helps.</p>
      <Link to="/breweries">Check out the breweries.</Link>
    </div>
  </Layout>
)

export default IndexPage
