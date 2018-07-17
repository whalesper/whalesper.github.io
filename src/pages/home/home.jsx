import React, { Component } from 'react';
import Carousel from '../../components/carousel/carousel';
import Email from '../../components/email/email';
import './home.css';

class HomePage extends Component {
  
  componentDidMount() {
    document.title = 'Home | Whalesper Technology Inc.';
  }

  render() {
    return <div className='Home-container'>
      <Carousel />

      {/* <div className='App-content'>
      <div className='Guy-wrapper'>
        <Post />
      </div>
    </div> */}
      <Email />
    </div>;
  }

}

export default HomePage;
