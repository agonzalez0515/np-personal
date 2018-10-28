import Link from 'gatsby-link'

const NavList= props =>
  <li className="nav-item">
    <Link to={props.to}>
        {props.children}
    </Link>
  </li>

export default NavList