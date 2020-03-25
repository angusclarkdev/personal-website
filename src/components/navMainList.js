import React, { useRef } from 'react'
import styled from 'styled-components'

const NavMainList = () => {
  const menuRef = useRef(null)
  console.info(menuRef)
  useEffect(() => {
    menuRef.current.focus()
    console.info('focused?')
    console.info(document.activeElement)  
  })
  return (
    <ul ref={menuRef}> 
      <li>
        <a href='/about'> About me </a>
      </li>
      <li>
        <a href='/contact'> Contact me </a>
      </li>
      <li>
        <a href='https://www.github.com/angusclarkdev'> Github </a>
      </li>
      <li>
        <a href='#'> Instagram </a>
      </li>
    </ul> 
  )
}

export default NavMainList
