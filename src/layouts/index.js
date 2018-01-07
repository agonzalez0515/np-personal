import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'



const Header = props => 
    <div
      css={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 css={{ 
        margin: 0, 
        fontSize: `5rem`,
        textAlign: `center`,
        paddingTop: `2rem` 
      }}
      >
        <Link
          to="/"
          css={{
            color: `black`,
            ':hover': {
              textDecoration: `none`,
            },
            '@media (max-width:400px)': {
            fontSize: `2rem`,
            }
          }}
        >
          NATALIA PROVATAS
        </Link>
      </h1>
      <p css={{
        fontSize: `1.2rem`,
        textAlign: `center`,
        letterSpacing: `2px`,
        paddingTop: `10px` 
      }}>
          WRITER | EDITOR | WRITER
      </p>
    </div>

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
            fontSize: `1.40rem`,
            letterSpacing: `2px`
          }}
          to={props.to}>
            {props.children}
        </Link>
      </li>
  

//the div below the header is the container for the body
const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Natalia Provatas writing portfolio"
      // meta={[
      //   { name: 'description', content: 'Sample' },
      //   { name: 'keywords', content: 'sample, something' },
      // ]}
    />
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
        <NavList to="/about">about</NavList>
        <NavList to="/other-work">other work</NavList>
        <NavList to="contact">contact</NavList>
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
