import React, { Component } from 'react';
import '../styles/tab.css';
import Post from "../components/post";
import Background from "../components/background";

class EventPage extends Component {

  render() {
    return <div>
    <Background 
    src={require("../assets/background.jpg")} 
    />
    <div className="Image-overlay">
      <div className="Overlay-text">
       Let food find you before you find them
      </div>
    </div>
    <div className="App-content">
      <div className="Guy-wrapper">
        <Post />
      </div>
    </div>
  </div>
  }

}

export default EventPage;
