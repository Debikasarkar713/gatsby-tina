import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { useJsonForm } from "gatsby-tinacms-json"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const fields = [
  {
    label: "Title",
    name: "rawJson.title",
    description: "title of the page",
    component: "text",
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
