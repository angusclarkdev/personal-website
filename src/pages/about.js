import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>A Little About Me</h1>
    <p>Hi, I'm Angus. I'm a software engineer London. I have worked for Vodafone for the past two years.
    </p>
    <p>Welcome to my personal website and blog
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
