import Link from 'gatsby-link'


const Header = () =>
  <div>
    <div>
      <ul className="socials">
        <li className="social-links">
            <a href="https://twitter.com/nataliaprovatas">twitter</a>
        </li>
        <li className="social-links">
            <a href="https://www.instagram.com/chola4hire/">instagram</a>
        </li>
        <li className="social-links">
            <a href="mailto:nataliaprovatas@gmail.com" target="_top">email</a>
        </li>
      </ul>
    </div>
    <div className="header">
      <h1>
        <Link to="/" className="name">
          NATALIA PROVATAS
        </Link>
      </h1>
      <p className="sub-heading">
          WRITER | FILMMAKER
      </p>
    </div>
  </div>

export default Header
