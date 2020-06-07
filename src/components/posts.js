import React from 'react'
import styled from 'styled-components'
import BlogPost from './blogPost'

const StyledSection = styled.section`
  margin-top: 2rem;
  margin-right: 1em;
`

const Posts = ({ posts }) => (
  <StyledSection>
    {posts.map(i => (
      <BlogPost key={i.id} title={i.title} content={i.content} />
    ))}
  </StyledSection>
)

export default Posts
