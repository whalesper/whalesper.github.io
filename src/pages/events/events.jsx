import React, { Component } from 'react';
import Post from '../../components/post/post';
import Background from '../../components/background/background';

class EventPage extends Component {

  render() {
    return <div>
      <Background
        src={require('../../assets/background.jpg')}
      />
      <div className='Image-overlay'>
        <h1 className='Title-primary Text-white'>
          Let food find you before you find them
        </h1>
      </div>
      <div className='App-content'>
        <div className='Guy-wrapper'>
          <Post />
        </div>
      </div>
    </div>;
  }

}

export default EventPage;
