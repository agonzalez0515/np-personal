import Link from 'gatsby-link'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faTwitter, faInstagram} from '@fortawesome/fontawesome-free-brands'
import {faEnvelope} from '@fortawesome/fontawesome-free-solid'

const Header = props =>
    <div>
    <div>
      <ul css={{
        overflow: `hidden`,
       margin: 0,
       padding: 0,
      }}>
        <li className="footer-icons">
            <a href="https://twitter.com/nataliaprovatas"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
        </li>
        <li className="footer-icons">
            <a href="https://www.instagram.com/chola4hire/"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
        </li>
        <li className="footer-icons">
            <a href="mailto:nataliaprovatas@gmail.com" target="_top"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
        </li>
      </ul>
    </div>
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
            '@media (max-width: 415px)': {
            fontSize: `3.8rem`,
            paddingTop: `10px` 
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
          WRITER | FILMMAKER
      </p>
    </div>
  </div>
export default Header
