import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/header'


    const NavList= props =>
      <li 
      css={{ 
        display: `inline-block`,
        padding: `2rem`,

      }}>
        <Link 
          css={{
            color: `white`,
            fontWeight: `bold`,
            fontStyle: `italic`,
            fontSize: `1.5em`,
            letterSpacing: `2px`
          }}
          to={props.to}>
            {props.children}
        </Link>
      </li>
  

//the div below the header is the container for the body
const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Natalia Provatas</title>
    </Helmet>
    <Header />
    <nav css={{
      width: `100%`,
      height: `6rem`,
      background: `#16DB93`,
      textAlign: `center`
    }}>
      <ul css={{
        listStyle: `none`,
        width: `80%`,
        margin: `auto`,
        display: `inline-block`
      }} >
        <NavList to="/">home</NavList>
        <NavList to="/about">about</NavList>
      </ul>
    </nav>
    <div
      css={{
        margin: '0 auto',
        width: `auto`,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
