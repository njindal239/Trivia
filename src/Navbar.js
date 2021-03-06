import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = ({isLoggedIn, logout}) => {
  return(
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#"> GLOBAL TRIVIA </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            {!isLoggedIn() ?
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
              </ul> :
              <ul className="nav navbar-nav navbar-right">
                <li onClick={logout}><Link to="#">Logout</Link></li>
                <li><a href="/">Dashboard</a></li>
              </ul>}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
