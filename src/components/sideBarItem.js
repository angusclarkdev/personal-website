import React from 'react'
import styled from 'styled-components'

const ItemCount = styled.span`
  color: rgba(0, 0, 0, 0.5);
`
const SideBarItem = (props) => {
  return (
  <>
    <span> {props.categories && props.categories.catergory} </span>
    {props.categories && (
      <ItemCount> ({props.categories.count}) </ItemCount>
    )}
  </>
  )
}

export default SideBarItem
