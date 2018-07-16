import React, { Component } from 'react';
import './banner.css';

class Banner extends Component {
  render() {
    return (
      <div className="Banner-container">
        <div className="Left-container">
          <div className="Logo-container">
            <img className="App-download-logo" src={require('../../assets/iit@3x.svg')} alt="" />
          </div>
          <div className="Text-container">
            <h1 className="Title-primary No-margin">
              iit
            </h1>
            <div className="Body Text-smaller  No-margin">
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