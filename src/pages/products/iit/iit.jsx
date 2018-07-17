import React, { Component } from 'react';

import './iit.css';
import Banner from '../../../components/banner/banner';
import Background from '../../../components/background/background';

class IitPage extends Component {

  componentDidMount() {
    document.title = 'iit | Products | Whalesper Technology Inc.';
  }

  render() {
    return <div>
      <Background
        src={require('../../../assets/background.jpg')}
      />
      <div className='Image-overlay'>
        <h1 className='Title-primary Text-white Text-center'>
          iit
        </h1>
      </div>
      <div className='App-content'>
        <article className="Paragraph-container">
          <h2 className="Title-secondary Text-left">Lets food find you before you find it.</h2>
          <p className='Text-left Body'>
            iit, a new deep learning platform that lets food find you before you find it. Swipe through great images of dishes from nearby restaurants. iit is the first personalized app that helps you decide what to eat based on your preferences.
          </p>
          <p className='Text-left Body'>
            Behind the scenes, our platform is powered by a personalized recommendation engine developed specifically with the hungry consumer in mind. iit learns your cravings, tastes, and diet preferences over time, ensuring {'you\'ll'} always find something great to
            have.
          </p>
          <h2 className="Title-secondary Text-left">Feed your camera in an elegant way.</h2>
          <p className='Text-left Body'>
            We also provides image recognition on user’s social image to present deals. We both recognize the dish entirely and the main ingredients of your food, you can either track your diet or for social purpose.
          </p>
          <p className='Text-left Body'>
            We bet heavily on leveraging machine learning to deliver powerful and automatic functionalities. There are far more potentials and prospects we can implement in the future.
          </p>
          <h2 className="Title-secondary Text-left">Every food in your city is on the palm of your hand.</h2>
          <p className='Text-left Body'>
            We aggregate all food providers of Toronto and provide the most trustworthy collections of great restaurants in several perspectives. Browse through restaurant menus, photos, and find the right place to eat out at or order in from.
          </p>
          <Banner></Banner>
        </article>
      </div>
    </div>;
  }

}

export default IitPage;
