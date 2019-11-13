import React from "react"
import { Link } from "gatsby"
import HomePage from "../components/home"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" />

    <HomePage />

    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
