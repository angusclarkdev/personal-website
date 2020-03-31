import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import closeIcon from '../images/close.svg'
import NavMainList from './navMainList'
import { InvisibleButton } from './header'

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
`

const CloseButton = styled.button`
  background: transparent;
  border: none !important;
  font-size:0;
  position: absolute;
  right: 0;
  margin-right: 1rem;
  cursor: pointer;
`

const SideNavigation  = ({ isVisible, close }) => {
  const [ shiftPressed, setShiftPressed ] = useState(false)
  const menuRef = useRef(null)
  useEffect(() => {
    menuRef.current.focus()
    console.info('focused')
  })

  useEffect(() => {
    const keyListener = (e) => {
      const listener = keyListenerMap.get(e.keyCode)
      listener && listener(e)
    }
    document.addEventListener('keydown', keyListener)

    return () => document.removeEventListener('keydown', keyListener)
  })

  const handleCloseMenu = () => {
    close()
  }

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      close()
    }
  }
  const handleShiftPressed = () => {
    setShiftPressed(true)
  }
  const handleTabKey = (e) => {
    const nodeArray = Array.from(menuRef.current.childNodes)
    const focusableElements = menuRef.current.querySelectorAll('button, [href]')
    const firstFocusable = focusableElements[0]
    const lastFocusable = focusableElements[focusableElements.length - 1]
    console.info('first', firstFocusable)
    console.info('last', lastFocusable)
    if (shiftPressed && e.target === firstFocusable) {
      lastFocusable.focus()
    }
    if (e.target === lastFocusable) {
      e.preventDefault()
      firstFocusable.focus()
      } 
    }

  const mapValues = [[27, handleCloseMenu], [9, handleTabKey], [16, handleShiftPressed]]
  const keyListenerMap = new Map(mapValues)

  return (
    <StyledDiv tabIndex='0' ref={menuRef} isVisible={isVisible} onBlur={handleBlur}>
     <CloseButton>
     	  <img src={closeIcon} onClick={close}/>
     </CloseButton>
      <NavMainList />
  </StyledDiv>
  )
}

export default SideNavigation
