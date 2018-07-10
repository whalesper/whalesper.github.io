import React, { Component } from 'react';
import '../styles/products.css';
import Post from "../components/post";
import Background from "../components/background";

class ProductsPage extends Component {

  render() {
    return <div>
      <Background
        src={require("../assets/background.jpg")}
      />
      <div className="Image-overlay">
        <div className="Overlay-text Overlay-text-about">
          When innovation meets technology
      </div>
      </div>
      <div className="App-content">
        <div className="App-card-wrapper">
          <div className="App-card-container Whalesper">
            <div className="App-card">
              <img className="App-phone Whalesper" src={require('../assets/whalesper-phone.png')} alt="" />
            </div>
            <div className="App-card-text-container">
              <div className="App-card-title noselect">Whalesper</div>
              <div className="App-card-secondary-title noselect">Our first product</div>
            </div>

          </div>

          <div className="App-card-container iit">
            <div className="App-card">
              <img className="App-phone App-phone-right iit" src={require('../assets/iit-phone.png')} alt="" />
            </div>

            <div className="App-card-text-container Left">
              <div className="App-card-title noselect">iit</div>
              <div className="App-card-secondary-title noselect">On its way ;)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }

}

export default ProductsPage;
