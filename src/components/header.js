import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components'

import menu from '../images/menu.svg'


const StyledH1 = styled.h1`
  text-decoration: none;
  text-transform: italic;
  margin: 0;

  a {
     color: var(--header);
  }
`

const InvisibleButton = styled.button`
  background: transparent;
  border: none !important;
  font-size:0;
`

const StyledImg = styled.img`
  cursor: pointer;
  z-index: 1;
`

const Header = ({ title, showSideNavigation }) => (
  <header
    style={{
      // marginBottom: `1.45rem`,
    }}
  >
      <StyledH1>
          <a href='https://localhost:8000'>{title}</a>
      </StyledH1>
      {/* <InvisibleButton onClick={showSideNavigation}>
        <StyledImg src={menu} />
        </InvisibleButton> */}
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
}
export default Header
