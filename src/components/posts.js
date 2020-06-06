import React from 'react'
import styled from 'styled-components'
import BlogPost from './blogPost'

const StyledSection = styled.section`
  margin-top: 2rem;
  margin-right: 1em;
`

const Posts = () => (
  <StyledSection>
    <BlogPost category='tech' />
    <BlogPost category='tech' />
    <BlogPost category='tech' />
    {/* <BlogPost category='tech' /> */}
    {/* <BlogPost category='mental health' /> */}
  </StyledSection>
)

export default Posts
