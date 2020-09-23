import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class Header extends Component {
  state = {
    navItems: [
      {
        path: '/',
        title: 'Home',
      },
      {
        path: '/about-us',
        title: 'About Us',
      },
      {
        path: '/my-profile',
        title: 'My Profile',
      }
    ],
    curNav: 'Home'
  }

  changeCurNav = (title) => {
    this.setState({
      curNav: title
    })
  }

  render() {
    return (
      <div>
        <ul className="nav justify-content-end nav-pills">
          {this.state.navItems.map((navItem) => (
            <li key={navItem.title}  className="nav-item">
              <Link
                onClick={() => this.changeCurNav(navItem.title)} 
                className={`nav-link ${navItem.path === window.location.pathname ? 'active' : ''}`} 
                to={navItem.path}
              >
                {navItem.title} 
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Header;