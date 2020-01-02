import React from 'react'
import styled from 'styled-components'
import SideBarItem from '../components/sideBarItem'

const categories = [
  { catergory: 'General', count: 5 },
  { catergory: 'Tech', count: 3 },
  { catergory: 'Mental Health', count: 10 }
]

const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
`

const StyledDiv = styled.div`
  padding: 1em;
`

const StyledH3 = styled.h3`
  font-size: 1em;
`

const SideBar = () => (
  <StyledDiv>
    <StyledH3> Categories </StyledH3>
    <StyledUl>
      {categories.map(i => (
        <li>
        <SideBarItem itemData={i} />
        </li>
    ))}
    </StyledUl>
  </StyledDiv>
)

export default SideBar
