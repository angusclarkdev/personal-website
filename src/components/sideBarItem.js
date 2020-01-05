import React from 'react'

const SideBarItem = (props) => {
  return (
  <>
    <span> {props.categories && props.categories.catergory} </span>
    {props.categories && (
      <span> ({props.categories.count}) </span>
    )}
  </>
  )
}

export default SideBarItem
