import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { useJsonForm } from "gatsby-tinacms-json"
import Layout from "./layout"
import Image from "./image"
import SEO from "./seo"

const fields = [
  {
    label: "Title",
    name: "rawJson.title",
    description: "title of the page",
    component: "text",
  },
]

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      dataJson(fileRelativePath: { eq: "/data/home.json" }) {
        title

        fileRelativePath
        rawJson
      }
    }
  `)

  const [home] = useJsonForm(data.dataJson, {
    label: "Home",
    fields,
  })

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{home.title}</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default HomePage
