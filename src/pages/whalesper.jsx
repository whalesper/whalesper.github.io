import React, { Component } from 'react';
import '../styles/whalesper.css';
import Background from '../components/background/background';

class WhalesperPage extends Component {

  render() {
    return <div>
      <Background
        src={require('../assets/background.jpg')}
      />
      <div className='Image-overlay'>
        <div className='Overlay-text Overlay-text-about'>
          When innovation meets technology
        </div>
      </div>
      <div className='App-content'>
      </div>
    </div>;
  }

}

export default WhalesperPage;
