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

export default Header