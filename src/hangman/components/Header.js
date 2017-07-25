import React, { Component } from 'react';
import './style.css';

import logo from './logo.svg';

export class AppHeader extends Component {
  render() {
    return (
      <div id="heder" className="header">
        <img src= { logo } className="headimg" alt="logo" />
      </div>
    );
  }
}

export default AppHeader;
