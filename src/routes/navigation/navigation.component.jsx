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
            <h3>CYBERSECURITY AND<br></br> COMPETITIVE <br></br>PROGRAMMING CLUB</h3>
            <h2>An initiative by a group of cybersecurity and competitive<br></br>programming enthusiasts at College Of Enginneering,<br></br>Trivandrum</h2>
            <button>Latest Activities</button>
    </div>
    <Outlet/>
    </Fragment>
  )
}

export {Navigation};