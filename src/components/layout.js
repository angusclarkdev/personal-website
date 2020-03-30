/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import "typeface-montserrat"
import "typeface-karla"

import Header from "./header"
import "./layout.css"
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
        {isSideNavigationVisible && (
          <>
            <OverLay />
            <SideNavigation
              handleBlur={() => toggleSideNavigationVisibility()}
              isVisible={isSideNavigationVisible}
              close={() => toggleSideNavigationVisibility()}
            />
          </>
          )}
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 1170,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
                display: 'flex',
                minHeight: '100vh',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              <Header title={headerTitle} showSideNavigation={() => toggleSideNavigationVisibility(true)} />
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
