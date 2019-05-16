import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Node API Auth
        </Link>

        {/* bt-classes bring it in the right position */}
        <div className="collapse navbar-collapse">
          {/* is the list for the left side of the navbar */}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
          </ul>
          {/* is the list for the right of the navbar */}
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signout">
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
