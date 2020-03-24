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
const useClickOutsideHandler = (ref) => {
  const [ isClickOutside, setClickOutside ] = useState(false)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setClickOutside(true)
        console.info('outside')
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
  console.info('returning')
  return isClickOutside 
}

const SideNavigation  = ({ isVisible, close }) => {
  console.info('rendering')
  const menuRef = useRef(null)
  let isSideNavigationVisible
  useEffect(() => {
    isSideNavigationVisible = useClickOutsideHandler(menuRef)
  },[])

  return (
    <div ref={menuRef}>
      {isSideNavigationVisible && (
        <StyledDiv isVisible={isVisible}>
        <img src={closeIcon} onClick={close}/>
        <nav>
        <NavMainList />
        </nav>
      </StyledDiv>
      )}
    </div>
  )
}

export default SideNavigation
