import React, { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import { CSSTransition } from 'react-transition-group';
import "typeface-montserrat"
import "typeface-karla"

import Header from "./header"
import SideNavigation from "./sideNavigation"

const OverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: rgba(0,0,0,0.7);
`

const HeaderWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 1rem;
  max-width: 1170px;
  display: flex;
  justify-content: space-between;
`

const Layout = ({ children, headerTitle }) => {
  const [ isSideNavigationVisible, toggleSideNavigationVisibility ] = useState(false)

  const theme = {
    colors: {
      primaryHoverGreen: '#7CE0C4'
    }
  }
  return (
    <>
      <ThemeProvider theme={theme}> 
        {isSideNavigationVisible && <OverLay />}
          <>
            {/* <CSSTransition
              in={isSideNavigationVisible}
              timeout={400}
              classNames="transform"
              onEnter={() => console.info('FIRED')}
            > */}
              {/* <SideNavigation
                handleBlur={() => toggleSideNavigationVisibility(false)}
                isVisible={isSideNavigationVisible}
                close={() => toggleSideNavigationVisibility(false)}
              /> */}
            {/* </CSSTransition> */}
          </>
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 1170,
                padding: `3rem 1.5rem 1rem`,
                display: 'flex',
                minHeight: '100vh',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              <HeaderWrapper>
                <Header title={headerTitle} showSideNavigation={() => toggleSideNavigationVisibility(true)} />
              </HeaderWrapper>
              <main style={{
                flexGrow: 1
              }}>{children}</main>
              <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer>
            </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
