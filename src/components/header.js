import Link from 'gatsby-link'

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

export default Header
