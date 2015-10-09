/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import Navigation from '../Navigation';
import { Button, Glyphicon } from 'react-bootstrap';

@withStyles(styles)
class Header extends Component {

  render() {
    const playStore = 'https://play.google.com/store/apps/details?id=com.sonyericsson.xhs';

    return (
      <div className="Header">
        <div className="Header-container">
          <a className="Header-brand" href="/" onClick={Link.handleClick}>
            <img className="Header-brandImg" src={require('./logo-small.png')} width="160" height="90" alt="SONY" />
            <span className="Header-brandTxt"></span>
          </a>
          <Navigation className="Header-nav" />
          <div className="Header-banner">
            <h1 className="Header-bannerTitle">XPERIA Lounge</h1>
            <p className="Header-bannerDesc">Download the app today!</p>
            <Button className="Header-bannerButton" bsStyle="primary" bsSize="large" target={playStore}>
              <Glyphicon glyph="download" /> Download</Button>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
