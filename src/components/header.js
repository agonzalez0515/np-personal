import Link from 'gatsby-link'


const Header = props =>
    <div>
    <div>
      <ul css={{
        overflow: `hidden`,
       margin: 0,
       paddingRight: `2%`,
       fontSize: `1.2em`
      }}>
        <li className="media-icons">
            <a href="https://twitter.com/nataliaprovatas">twitter</a>
        </li>
        <li className="media-icons">
            <a href="https://www.instagram.com/chola4hire/">instagram</a>
        </li>
        <li className="media-icons">
            <a href="mailto:nataliaprovatas@gmail.com" target="_top">email</a>
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
            },
            '@media (max-width: 815px)': {
              fontSize: `3rem`,
              paddingTop: `10px` 
            }
          }}
        >
          NATALIA PROVATAS
        </Link>
      </h1>
      <p css={{
        fontSize: `1.1rem`,
        textAlign: `center`,
        letterSpacing: `3px`,
        paddingTop: `3%` 
      }}>
          WRITER | FILMMAKER
      </p>
    </div>
  </div>
export default Header
