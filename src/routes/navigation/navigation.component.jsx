import { Fragment } from "react";
import { Outlet,Link } from "react-router-dom"
// import { ReactComponent as Logo } from "../../assets/pattern.svg";
import './navigation.styles.scss'

const Navigation = () =>
{
  return(
  <Fragment>
    <div className="navigation">
        <Link className="logo-container" to='/'>
        </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to='/'>
            Home
            </Link>
            <Link className="nav-link" to='/about'>
            About
            </Link>
            <Link className="nav-link" to='/community'>
            Community
            </Link>
            <Link className="nav-link" to='/activities'>
            Activities
            </Link>
            <Link className="nav-link" to='/contact'>
            Contact
            </Link>
        </div>
    </div>
    <Outlet/>
    </Fragment>
  )
}

export {Navigation};