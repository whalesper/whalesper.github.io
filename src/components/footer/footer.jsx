import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './footer.css';

class Footer extends Component {

  render() {
    return (
      <footer className="Footer-container">
        {/* <div className="Footer-grid-wrapper">
          <div className="Footer-grid">
          <img className="Footer-grid-background" src={require('../../assets/background.jpg')} alt="bg" />
            <div className="Footer-grid-title-primary">
            iit
            </div>
            <div className="Footer-grid-title-secondary">
            Where your new journey of food begins
            </div>
          </div>
          <div className="Footer-grid">
          <img className="Footer-grid-background" src={require('../../assets/background.jpg')} alt="bg" />
            <div className="Footer-grid-title-primary">
            iit
            </div>
            <div className="Footer-grid-title-secondary">
            Where your new journey of food begins
            </div>
          </div>
          <div className="Footer-grid">
          <img className="Footer-grid-background" src={require('../../assets/background.jpg')} alt="bg" />
            <div className="Footer-grid-title-primary">
            iit
            </div>
            <div className="Footer-grid-title-secondary">
            Where your new journey of food begins
            </div>
          </div>
        </div> */}
        <div className="Footer-column-wrapper">
          <div className="Footer-column">
            <Link to='./events' className="Footer-column-title">
              Events
            </Link>
            <ul className="Footer-column-list">
              <li className="Footer-column-item">
                <Link to='./events#event-1' >Show me your food</Link>
              </li>
            </ul>
          </div>
          <div className="Footer-column">
            <Link to='./products' className="Footer-column-title">
              Products
            </Link>
            <ul className="Footer-column-list">
              <li className="Footer-column-item">
                <Link to='./products/whalesper'>Whalesper</Link>
              </li>
              <li className="Footer-column-item">
                <Link to='./products/iit'>iit</Link>
              </li>
            </ul>
          </div>
          <div className="Footer-column">
            <div className="Footer-column-title">
              Support
            </div>
            <ul className="Footer-column-list">
              <li className="Footer-column-item">
                Coming soon
              </li>
            </ul>
          </div>
          <div className="Footer-column">
            <Link to='./about' className="Footer-column-title">
              About us
            </Link>
            <ul className="Footer-column-list">
              <li className="Footer-column-item">
                <Link to='./about#team'>Team Whalesper</Link>
              </li>
              <li className="Footer-column-item">
                <Link to='./about#contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="Footer-bottom-row">
        Copyright © 2018 Whalesper Technology Inc.
        </div>
      </footer>
    );
  }
}

export default Footer;