import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  margin-bottom: 2em;

  h3 {
    color: var(--title)
  }
`

/** blog post items 
 * date
 * time to read
 * brief explanation
 * read more option with arrow 
 * 
 * 
*/
const BlogPost = () => (
  <StyledDiv>
    <h3> Easier forms in react applications with react-hook-form </h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nobis similique magnam </p>
  </StyledDiv>
)

export default BlogPost
