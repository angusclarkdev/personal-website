import React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from 'styled-components'

import BlogTitle from '../components/blogTitle'
import BlogPost from '../components/BlogPost'
import Image from "../components/image"
import Layout from "../components/layout"
import SideBar from '../components/sideBar'
import SEO from "../components/seo"

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #F5F5F5;
  }
`
const MainContent = styled.section`
  display: flex;
  /* justify-content: space-between; */
`
const IndexPage = () => (
  <Layout headerTitle='Angus Clark'>
    <GlobalStyles />
    <SEO title="Home" />
    <BlogTitle />
    <MainContent>
      <BlogPost />
      <SideBar />
    </MainContent>
  </Layout>
)

export default IndexPage
