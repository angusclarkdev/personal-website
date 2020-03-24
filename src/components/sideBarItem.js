import React from 'react'
import styled from 'styled-components'

const ItemCount = styled.span`
  color: rgba(0, 0, 0, 0.5);
`

const StyledDiv = styled.div`
  cursor: pointer;
  display: inline-block;

  &:hover span {
    color: ${props => props.theme.colors.primaryHoverGreen}
  }
`

const SideBarItem = (props) => {
  return (
  <StyledDiv>
    <span> {props.categories && props.categories.catergory} </span>
    {props.categories && (
      <ItemCount> ({props.categories.count}) </ItemCount>
    )}
  </StyledDiv>
  )
}

export default SideBarItem
