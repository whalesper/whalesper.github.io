import React, { Component } from 'react';
import './banner.css';
import logo from '../../assets/iit@3x.svg';

class Banner extends Component {
  render() {
    return (
      <div className="Banner-container">
        <div className="Left-container">
        <div className="Logo-container">
          <img className="Logo" src={require('../../assets/iit@3x.svg')} alt=""/>
        </div>
        <div className="Text-container">
          <div className="Title-primary">
            iit
          </div>
          <div className="Title-secondary">
          Download and start your new journey of food
          </div>
        </div>
        </div>
        <button className="Download-button">Get</button>
      </div>
    );
  }
}

export default Banner;