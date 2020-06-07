import React, { useState } from 'react'
import styled from 'styled-components'


const StyledDiv = styled.div`
  display: inline;
  padding: 0px 8px;

  input {
    position: absolute;
    left: -100vw;
  }

  button {
    background-color: inherit;
    border-color: ${props => props.checked ? `var(--link-and-btn-active)` : `rgb(176, 176, 176)`};
    border-radius: 30px;
    border-width: 1px;
    border-style: solid;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;
    margin-bottom: 8px;
    cursor: pointer;

    &:active {
      border-color: var(--link-and-btn-active);
    }
  
    &:focus {
      outline: 0;
    }
  }
`

const FilterButton = ({ children, checked, filterByCategory }) => {
  const [ isChecked, toggleChecked ] = useState(false)

  const handleClick = ({ target }) => {
    // toggle local state to change style
      toggleChecked(!isChecked)
      filterByCategory()
  }

  return (
    <StyledDiv checked={isChecked}>
      <button onClick={handleClick}>
        {children}
      </button>
    </StyledDiv>
  )
}

export default FilterButton
