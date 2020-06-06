import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group';

import closeIcon from '../images/close.svg'
import NavMainList from './navMainList'
import { InvisibleButton } from './header'

const StyledDiv = styled.div`
  background-color: #F5F5F5;
  height: 100%;
  position: fixed;
  right: 0px;
  transform: translateX(100%);
  padding: 1.45rem 6rem;
  z-index: 2;

  &.transform-enter {
    right: 0px;
    transform: translateX(100%);
    /* transform: translateX(0%); */

  }

  &.transform-enter-active {
    transform: translateX(0%);
    transition: transform .4s ease-in-out;
  }

  &.transform-enter-done {
    transform: translateX(0%);
  }

  &.transform-exit {
    transform: translateX(0%);
  }

  &.transform-exit-active {
    transform: translateX(100%);
    transition: transform .4s ease-in-out;
  }

  ul {
    margin: 0;
  }

  li {
    padding-bottom: .5em;
    margin-bottom: 0;
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
  const menuRef = useRef(null)
  useEffect(() => {
    if (isVisible) {
      console.info()
      menuRef.current.focus()
    }
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
      console.info('blurred')
      close()
      menuRef.current.blur()
    }
  }
  
  const handleTabKey = (e) => {
    if (!isVisible) {
      return
    }
    const focusableElements = menuRef.current.querySelectorAll('button, [href]')
    const firstFocusable = focusableElements[0]
    const lastFocusable = focusableElements[focusableElements.length - 1]
    if (e.shiftKey && e.target === firstFocusable) {
      e.preventDefault()
      lastFocusable.focus()
    }
     if (!e.shiftKey && e.target === lastFocusable) {
      e.preventDefault()
      firstFocusable.focus()
    }
  }

  const mapValues = [[27, handleCloseMenu], [9, handleTabKey]]
  const keyListenerMap = new Map(mapValues)
  return (
    
      <StyledDiv tabIndex='-1' ref={menuRef} isVisible={isVisible} onBlur={handleBlur}>
        <CloseButton tabIndex='0' onClick={close}>
          <img src={closeIcon} />
        </CloseButton>
        <NavMainList />
      </StyledDiv>
  )
}

export default SideNavigation
