import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

import closeIcon from '../images/close.svg'
import NavMainList from './navMainList'

const StyledDiv = styled.div`
  background-color: #F5F5F5;
  height: 100%;
  position: fixed;
  right: 0;
  transform: ${props => props.isVisible ? 0 : 'translateX(311px)'}; 
  padding: 1.45rem 6rem;
  z-index: 2;
  transition: transform .4s ease-in-out;

  ul {
    margin: 0;
  }

  li {
    padding-bottom: .5em;
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    
    &:hover {
      color: ${props => props.theme.colors.primaryHoverGreen}
    }
  }

  nav {
    position: relative;
  }

  img {
    position: absolute;
    right: 0;
    margin-right: 1rem;
    cursor: pointer;
  }
`

const SideNavigation  = ({ isVisible, close }) => {
  return (
    <StyledDiv isVisible={isVisible}>
     <img src={closeIcon} onClick={close}/>
      <nav>
      <NavMainList />
      </nav>
  </StyledDiv>
  )
}

export default SideNavigation
