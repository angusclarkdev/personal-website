import React from 'react'
import styled from 'styled-components'
import BlogPost from './blogPost'

const StyledSection = styled.section`
flex-basis: 75%;
margin-right: 1em;
`

const Posts = () => (
  <StyledSection>
    <BlogPost category='general' />
    <BlogPost category='tech' />
    <BlogPost category='mental health' />
  </StyledSection>
)

export default Posts
