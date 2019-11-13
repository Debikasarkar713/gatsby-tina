import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { useJsonForm } from "gatsby-tinacms-json"
import Layout from "./layout"
import SEO from "./seo"

const fields = [
  {
    label: "Title",
    name: "rawJson.title",
    description: "title of the page",
    component: "text",
  },
  {
    label: "Description",
    name: "rawJson.description",
    description: "description of the page",
    component: "textarea",
  },
]

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      dataJson(fileRelativePath: { eq: "/data/home.json" }) {
        title
        description

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
      <p>{home.description}</p>
    </Layout>
  )
}

export default HomePage
