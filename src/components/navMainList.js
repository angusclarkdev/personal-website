import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

const NavMainList = () => {
  return (
    <nav>
      <ul> 
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
    </nav>
  )
}

export default NavMainList
