import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  text-align: center;
  flex-basis: 70%;
  background-color: #fff;
  padding: 1em;
  margin-right: 1em;
`

const BlogPost = () => (
  <StyledDiv>
    <h3>Article Title</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nobis similique magnam necessitatibus velit debitis repudiandae perspiciatis! Hic aperiam, blanditiis corrupti, perferendis maxime cupiditate amet tenetur, earum quisquam molestias natus dolorum eligendi voluptates. Sequi fugiat debitis obcaecati molestias tenetur incidunt accusamus dolorum ullam sapiente. </p>
  </StyledDiv>
)

export default BlogPost
