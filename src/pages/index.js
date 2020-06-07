import React, { useState, useEffect } from "react"
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
import Filters from '../components/Filters'

const GlobalStyles = createGlobalStyle`
  ${normalize}

  :root {
    --bg: #ffffff;
    --bg-secondary: #121212;
    --header: #232323;
    --title: #0D58A6;
    --paragraph: var(--bg);
    --link-and-btn-active: #ff5700;
  }

  body {
    background-color: var(--bg);
  }
`
const MainContent = styled.section`
  display: flex;
  flex-direction: column;
`
/** filter options should be automatically populated by 'category' property on each blog listing
 * manually providing strings for now
 */
const categories = [
  'tech',
  'music',
  'mental',
  'fitness'
]
const blogPosts = [
  { category: 'tech', title: 'tech article', content: 'this is a tech blog post lalala', id: 1 },
  { category: 'music', title: 'music article', content: 'music blog posts are great lalala', id: 2 },
  { category: 'mental', title: 'mental article', content: 'mental health is important lalala', id: 3 },
  { category: 'fitness', title: 'fitness article', content: 'curls get the girls lalala', id: 4 },
]

const IndexPage = () => {
    // can I use a different default?
  const [ filters, setFilters ] = useState([])
  const [ filteredPosts, filterPostsByCategory ] = useState(blogPosts)

  useEffect(() => {        
    const posts = (blogPosts.filter(i => filters.includes(i.category)))
    
    if (filters.length == 0) {
      filterPostsByCategory(blogPosts)  
    } else {
      filterPostsByCategory(posts)
    } 
  },[filters])

  const handleClick = (value) => {
    // look at refactor
    let newFilters = [...filters, value]
    if (filters.includes(value)) {
      newFilters = newFilters.filter(i => i !== value)
    }    
    setFilters(newFilters)
  }
  return (
    <Layout headerTitle='Angus Clark'>
        <GlobalStyles />
        <SEO title="Home" />
        <Intro />
        <MainContent>
          <Filters setFilters={handleClick} filterOptions={categories} />
          <Posts posts={filteredPosts} />
          {/* <SideBar /> */}
        </MainContent>
    </Layout>
  )
}

export default IndexPage
