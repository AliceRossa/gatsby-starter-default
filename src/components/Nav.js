import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styles from './Nav.module.scss';

class Nav extends React.Component {
  static propTypes = {
    pathname: PropTypes.string.isRequired,
    siteTitle: PropTypes.string.isRequired,
  };

  render() {
    const { pathname, siteTitle } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            {siteTitle}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className={pathname === '/' ? 'nav-item active' : 'nav-item'}>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li
                className={
                  pathname === '/contact/' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/contact/" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
