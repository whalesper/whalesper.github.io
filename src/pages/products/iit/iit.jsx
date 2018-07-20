import React, { Component } from 'react';

import Banner from '../../../components/banner/banner';
import Background from '../../../components/background/background';

import './iit.css';

const logo = (
  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1567.4 628">
    <title>
      iit
    </title>
    <path className="cls-1" d="M538.33,94.36h0A193.75,193.75,0,0,1,562.45,125a204.11,204.11,0,0,1,30.75,77.36c19.67,111.49-54.78,217.81-166.27,237.48a204.75,204.75,0,0,1-181-57.34l15.8-15.81L536.24,92.22l-.75-.76-1.66-1.63a312.35,312.35,0,0,0-165.32-85C237.46-18.28,111.07,43.5,45.79,150.7a312.52,312.52,0,0,0-41,108.79c-30.1,170.75,83.92,333.58,254.67,363.69s333.58-83.9,363.69-254.67C641.46,264.93,606.67,164.23,538.33,94.36Z" />
    <path className="cls-2" d="M426.93,439.83c111.49-19.67,185.94-126,166.27-237.48A204.11,204.11,0,0,0,562.45,125a193.69,193.69,0,0,1,18.65,170.6c-36.65,100.69-148,152.61-248.67,116a193.49,193.49,0,0,1-70.66-44.87L246,382.49A204.75,204.75,0,0,0,426.93,439.83Z" />
    <polygon className="cls-1" points="1433.39 175.08 1432.82 175.08 1451.55 41.82 1318.29 41.82 1299.56 175.08 1432.82 175.08 1432.82 175.12 1298.23 184.55 1279.32 319.14 1260.98 449.57 1260.71 449.59 1242.06 584.18 1375.09 574.85 1376.05 574.85 1376.64 574.85 1376.64 574.81 1376.65 574.74 1511.24 565.31 1530.15 430.71 1395.57 440.14 1395.83 438.29 1395.97 438.26 1395.83 438.28 1413.9 309.7 1548.48 300.27 1566.08 175.08 1567.4 165.68 1433.39 175.08" />
    <polygon className="cls-1" points="868.34 175.08 1001.6 175.08 1020.32 41.82 887.07 41.82 868.34 175.08" />
    <polygon className="cls-1" points="1083.95 175.08 1217.21 175.08 1235.94 41.82 1102.68 41.82 1083.95 175.08" />
    <polygon className="cls-1" points="843.8 349.66 812.15 574.85 945.41 574.85 978.38 340.23 997.3 205.65 862.71 215.08 843.8 349.66" />
    <polygon className="cls-1" points="1061.56 334.4 1027.76 574.85 1161.02 574.85 1196.14 324.97 1215.06 190.38 1080.47 199.81 1061.56 334.4" />
  </svg>);
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
          <div className="Product-logo iit">
            {logo}
          </div>
        </h1>
      </div>
      <div className='App-content'>
        <article className="Paragraph-container">
          <section>
            <h2 className="Title-secondary Text-left">Lets food find you before you find it.</h2>
            <p className='Text-left Body'>
              iit, a new deep learning platform that lets food find you before you find it. Swipe through great images of dishes from nearby restaurants. iit is the first personalized app that helps you decide what to eat based on your preferences.
            </p>
            {/* <img src={require('../../../assets/product/iit/home-init.png')} alt="iit homescreen" className="Product-video-frame"/> */}
            <div className="Product-video-container">
              <img src={require('../../../assets/phone/iphone-x-frame.png')} alt="iit homescreen" className="Product-video-frame" />
              <video src={require('../../../assets/product/iit/card-swipe.mp4')} autoPlay={true} loop="true" className="Product-video iit"></video>
            </div>
            <p className='Text-left Body'>
              Behind the scenes, our platform is powered by a personalized recommendation engine developed specifically with the hungry consumer in mind. iit learns your cravings, tastes, and diet preferences over time, ensuring {'you\'ll'} always find something great to
              have.
            </p>
          </section>
          <section>
            <h2 className="Title-secondary Text-left">Feed your camera in an elegant way.</h2>
            <p className='Text-left Body'>
              We also provides image recognition on user’s social image to present deals. We both recognize the dish entirely and the main ingredients of your food, you can either track your diet or for social purpose.
            </p>
            <div className="Product-video-container">
              <img src={require('../../../assets/phone/iphone-x-frame.png')} alt="iit homescreen" className="Product-video-frame" />
              <video src={require('../../../assets/product/iit/camera.mp4')} autoPlay={true} loop="true" className="Product-video iit"></video>
            </div>
            <p className='Text-left Body'>
              We bet heavily on leveraging machine learning to deliver powerful and automatic functionalities. There are far more potentials and prospects we can implement in the future.
            </p>
          </section>
          <section>
            <h2 className="Title-secondary Text-left">Every food in your city is on the palm of your hand.</h2>
            <p className='Text-left Body'>
              We aggregate all food providers of Toronto and provide the most trustworthy collections of great restaurants in several perspectives. Browse through restaurant menus, photos, and find the right place to eat out at or order in from.
            </p>
          </section>
          <img src={require('../../../assets/product/iit/iit-waterfall.jpg')} alt="iit concept poster" className="Product-photo" />
          <Banner
            title={'iit'}
            subtitle={'Download and start your new journey of food'}
            icon={require('../../../assets/iit@3x.svg')}
            link={'https://goo.gl/forms/AIiPsXoBp2l5RrlE3'}
            buttonText={'Join Beta'}
          />
        </article>
      </div>
    </div>;
  }

}

export default IitPage;
