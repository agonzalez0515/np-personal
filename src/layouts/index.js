import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import NavList from '../components/nav'
import '../style.scss'


//the div below the header is the container for the body
const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta charset="UTF-8" /> 
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Natalia Provatas: Writer and Filmmaker" /> 
      <meta name="keywords" content="writer, filmmaker, content creator, refinary 29, the gloss" />
      {/* <link rel="shortcut icon" href="favicon.ico" type="image/vnd.microsoft.icon"></link> */}
      <title>Natalia Provatas</title>
    </Helmet>
    <Header />
    <nav>
      <ul role="navigation" className="nav">
        <NavList to="/">published works</NavList>
        <NavList to="/collabs">collabs</NavList>
        <NavList to="/films">original content</NavList>
        <NavList to="/about">about</NavList>
      </ul>
    </nav>
    <div className="content">
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
