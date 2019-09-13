import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const TagsPage = () => (
  <Layout pageTitle="All Topics">
    <SEO title="Tags" keywords={["gatsby", "application", "react"]} />
    <h1>Tags Page</h1>
  </Layout>
)

export default TagsPage
