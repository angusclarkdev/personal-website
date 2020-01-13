import React from 'react'
import styled from 'styled-components'

const NavMainList = () => {
  return (
    <ul>
      <li>
        <a href='/about'> About me </a>
      </li>
      <li>
        <a href='/blogs'> Blog posts </a>
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
