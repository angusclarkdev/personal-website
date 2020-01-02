import React from 'react'

const SideBarItem = (props) => (
  <>
    <span> {props.itemData.catergory} </span>
    <span> ({props.itemData.count}) </span>
  </>
)

export default SideBarItem
