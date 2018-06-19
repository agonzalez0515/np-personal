import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from '../components/header'
import '../style.scss'


    const NavList= props =>
      <li className="nav-item">
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
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Natalia Provatas</title>
    </Helmet>
    <Header />
    <nav>
      <ul role="navigation" className="nav">
        <NavList to="/">home</NavList>
        <NavList to="/about">about</NavList>
        <NavList to="/more">more</NavList>
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
