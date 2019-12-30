import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Blog</h2>
    <p>Read musings on life, mental health, music and tech</p>
  </Layout>
)

export default IndexPage
