import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from 'styled-components'

import menu from '../images/menu.svg'

const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between;
`

const StyledH1 = styled.h1`
  text-decoration: none;
  text-transform: italic;
`

const StyledImg = styled.img`
  cursor: pointer;
`

const Header = ({ title }) => (
  <header
    style={{
      // background: `rebeccapurple`,a
      marginBottom: `1.45rem`,
    }}
  >
    <StyledDiv>
      <StyledH1>
          {title}
      </StyledH1>
      <StyledImg src={menu} onClick={() => alert('clicked')} />
    </StyledDiv>
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
}

export default Header
