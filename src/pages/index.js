import React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'
import Intro from '../components/Intro'
import Posts from '../components/posts'
import Image from "../components/image"
import Layout from "../components/layout"
import SideNavigation from '../components/sideNavigation'
import SideBar from '../components/sideBar'
import SEO from "../components/seo"


const GlobalStyles = createGlobalStyle`
  ${normalize}

  :root {
    --bg: #ffffff;
    --bg-secondary: #121212;
    --header: #232323;
    --title: #0D58A6;
    --paragraph: var(--bg);
  }

  body {
    background-color: var(--bg);
  }
`
const MainContent = styled.section`
  display: flex;
`

const IndexPage = () => (
  <Layout headerTitle='Angus Clark'>
      <GlobalStyles />
      <SEO title="Home" />
      <Intro />
      <MainContent>
        <Posts />
        {/* <SideBar /> */}
      </MainContent>
  </Layout>
)

export default IndexPage
