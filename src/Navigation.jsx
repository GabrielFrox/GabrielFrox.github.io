import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img from './home-icon.png';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <img src={ img } alt="home" id="home-logo" />
        </Link>
        <p>Gabriel Oliveira</p>
      </nav>
    );
  }
}

export default Navigation;
