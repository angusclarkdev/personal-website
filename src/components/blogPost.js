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
const BlogPost = ({ title, content }) => (
  <StyledDiv>
    <h3> {title} </h3>
    <p>{content} </p>
  </StyledDiv>
)

export default BlogPost
