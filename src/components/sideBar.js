import React from 'react'
import styled from 'styled-components'
import SideBarItem from '../components/sideBarItem'

const categories = [
  { catergory: 'General', count: 5 },
  { catergory: 'Tech', count: 3 },
  { catergory: 'Mental Health', count: 10 }
]

const latest = [
  {
    id: 1,
    title: '10 things wrong with tech in 2019'
  },
  {
    id: 2,
    title: 'Spice up your life with these tricks'
  }
]

const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
`

const StyledSection = styled.section`
  flex-basis: 30%;
  padding: 1em;

  > div {
    padding: 0 2em;
  }
`

const StyledH3 = styled.h3`
  font-size: 1em;
`

const SideBar = () => (
  <StyledSection>
    <div>
    <StyledH3> Categories </StyledH3>
    <StyledUl>
      {categories.map(i => (
        <li>
        <SideBarItem categories={i} />
        </li>
    ))}
    </StyledUl>
    </div>
    <div>
        {/* {latest.map(i => (
          <li>
          <
        </li>
        ))} */}
    </div>
  </StyledSection>
)

export default SideBar
