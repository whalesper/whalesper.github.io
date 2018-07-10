import React, { Component } from 'react';
import './products.css';
import Post from "../../components/post/post";
import Background from "../../components/background/background";
import { Link } from "react-router-dom";

class ProductsPage extends Component {

  render() {
    return <div>
      <Background
        src={require("../../assets/background.jpg")}
      />
      <div className="Image-overlay">
        <div className="Overlay-text Overlay-text-about">
          When innovation meets technology
      </div>
      </div>
      <div className="App-content">
        <div className="App-card-wrapper">
          <Link to='/products/whalesper' className="App-card-container Whalesper">
            <div className="App-card">
              <img className="App-phone Whalesper" src={require('../../assets/whalesper-phone.png')} alt="" />
            </div>
            <div className="App-card-text-container">
              <div className="App-card-title noselect">Whalesper</div>
              <div className="App-card-secondary-title noselect">Our first product</div>
            </div>
          </Link>

          <Link to='/products/iit'  className="App-card-container iit">
            <div className="App-card">
              <img className="App-phone App-phone-right iit" src={require('../../assets/iit-phone.png')} alt="" />
            </div>

            <div className="App-card-text-container Left">
              <div className="App-card-title noselect"><img className="App-card-icon" src={require('../../assets/iit@3x.svg')}/> iit</div>
              <div className="App-card-secondary-title noselect">On its way ;)</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  }

}

export default ProductsPage;
