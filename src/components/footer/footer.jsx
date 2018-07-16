import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {

  render() {
    return (
      <div className="Footer-container">
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
            <div className="Footer-column-title">
              Events
            </div>
            <ul className="Footer-column-list">
              <li className="Footer-column-item">
                Show me your food
              </li>
            </ul>
          </div>
          <div className="Footer-column">
            <div className="Footer-column-title">
              Products
            </div>
            <ul className="Footer-column-list">
              <li className="Footer-column-item">
                Whalesper
              </li>
              <li className="Footer-column-item">
                iit
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
            <div className="Footer-column-title">
              About us
            </div>
            <ul className="Footer-column-list">
              <li className="Footer-column-item">
                Team Whalesper
              </li>
              <li className="Footer-column-item">
                Contact
              </li>
            </ul>
          </div>
        </div>
        <div className="Footer-bottom-row">
        Copyright © 2018 Whalesper Technology Inc.
        </div>
      </div>
    );
  }
}

export default Footer;