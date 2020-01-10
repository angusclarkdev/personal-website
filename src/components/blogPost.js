import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  text-align: center;
  background-color: #fff;
  padding: 1em;
  margin-bottom: 2em;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`

const BlogPost = () => (
  <StyledDiv>
    <h3>Article Title</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nobis similique magnam necessitatibus velit debitis repudiandae perspiciatis! Hic aperiam, blanditiis corrupti, perferendis maxime cupiditate amet tenetur, earum quisquam molestias natus dolorum eligendi voluptates. Sequi fugiat debitis obcaecati molestias tenetur incidunt accusamus dolorum ullam sapiente. </p>
  </StyledDiv>
)

export default BlogPost
