import React, { Component } from 'react';

// import './whalesper.css';
// import Banner from '../../../components/banner/banner';
import Background from '../../components/background/background';
import { Link } from 'react-router-dom';

class NotFoundPage extends Component {

  componentDidMount() {
    document.title = 'Page Not Found | Products | Whalesper Technology Inc.';
  }

  render() {
    return <div>
      <Background
        src={require('../../assets/daniel-jensen-440210-unsplash.jpg')}
      />
      <div className='Image-overlay'>
        <h1 className='Title-primary Text-white Text-center'>
          {'We couldn\'t find that page...'}
        </h1>
      </div>
      <div className='App-content'>
        <article className="Paragraph-container">
          <h2 className="Title-secondary">Getting Lost?</h2>
          <p className='Body Link'>
            {'Don\'t worry, let\'s take you back...'}
          </p>
          <p className='Body Link'>
            <Link to="/">Home</Link>
          </p>
          <p className='Body Link'>
            <Link to="/events">Events</Link>
          </p>
          <p className='Body Link'>
            <Link to="/products">Products</Link>
          </p>
          <p className='Body Link'>
            <Link to="/about">About Us</Link>
          </p>
        </article>
      </div>
    </div>;
  }

}

export default NotFoundPage;
