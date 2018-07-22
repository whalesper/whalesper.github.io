import React, { Component } from 'react';
import { Parallax } from 'react-spring';
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';

import './carousel.css';
import CarouselPost from './carousel-post/carousel-post';
// import { CarouselPost, CarouselEventPost, CarouselProductPost } from '../../models/carousel.ts';


const data = [
  {
    index: 2,
    type: 'product',
    img: 'whalesper-header',
    title: 'Whalesper',
    goTo: '/products/whalesper',
    detailsTitle: 'Meet Whalesper, our first App',
    detailsBody: 'We have previously worked together and launched the product, Whalesper, at March 2017. It is originally an AI-powered local news aggregation iOS app. So far, we harvested nearly 31K users around Toronto area and ranked fourth in App Store Toronto search result.',
    downloadIOS: 'https://itunes.apple.com/ca/app/%E9%B2%B8%E8%AF%AD-%E5%A4%9A%E4%BC%A6%E5%A4%9A%E5%90%83%E5%96%9D%E7%8E%A9%E4%B9%90%E5%A4%B4%E6%9D%A1%E8%B5%84%E8%AE%AF/id1196585674?mt=8',
  },
  {
    index: 0,
    type: 'product',
    img: 'iit-header',
    title: 'iit',
    goTo: '/products/iit',
    detailsTitle: 'Let food find you before you find them',
    detailsBody: 'iit, a new deep learning platform that lets food find you before you find it. Swipe through great images of dishes from nearby restaurants. iit is the first personalized app that helps you decide what to eat based on your preferences. ',
    beta: 'https://goo.gl/forms/AIiPsXoBp2l5RrlE3'
  },
  {
    index: 1,
    type: 'event',
    img: 'camera-eats-first',
    title: 'Camera eats first',
    goTo: '/events#event-1',
    detailsTitle: 'Show us how you take photos of food',
    detailsBody: 'Start a food photography competition with us for free and let world know your delicious looking food!',
    date: '2018 / 08 / 17',
    location: '40 St George St'
  }
];

const initialState = {
  currentIndex: 0,
  transition: false,
  data: data.sort((a, b) => a.index - b.index)
};

class Carousel extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
    this.parallax = React.createRef();
  }

  goTo(index = 0) {
    this.clearInterval();
    if (index < 0) {
      index = this.state.data.length - 1;
    }
    index = (index <= this.state.data.length - 1) ? index : 0;
    this.setState({
      currentIndex: index,
    });
    this.scroll(index);
    this.props.updateBackground(index === 2);
    this.setInterval();
  }

  setInterval(interval = 10000) {
    this.interval = setInterval(() => this.goTo(this.state.currentIndex + 1), interval);
  }

  clearInterval() {
    // console.log('clear interval')
    clearInterval(this.interval);

  }

  componentDidMount() {
    if (isMobile) {
      this.goTo();
    }
  }

  componentWillUnmount() {
    this.clearInterval();
  }

  _renderIndicator(data) {
    return (
      <button type="button"
        title={`Go to ${data.index}`}
        className={`Carousel-indicator ${data.index === this.state.currentIndex ? 'active' : ''}`}
        key={data.index}
        onClick={() => this.goTo(data.index)}>
      </button>);
  }

  _renderIndicators() {
    if (!isMobile) {
      return <div className="Carousel-indicators">
        {this.state.data.map(x => this._renderIndicator(x))}
      </div>;
    } else return null;
  }

  isMobile() {
    return isMobile;
  }

  _renderDetails(data) {
    // let speed = data.index <= this.state.currentIndex ? 0.5 : 2;
    const speed = 1;
    const offset = data.index;
    return <React.Fragment key={offset}>
      <Parallax.Layer offset={offset} speed={0 * speed}>
        <div className="Carousel-body Width-golden">
          <h2 className="Title-secondary">
            {data.detailsTitle}
          </h2>
          <div className="Body">
            {data.detailsBody}
          </div>
          {/* <Link to={data.goTo} className="Body Text-bold Link">{'Learn More >'}</Link> */}
        </div>
      </Parallax.Layer>
      <Parallax.Layer offset={offset} speed={2 * speed}>
        <img className="Carousel-image" src={require(`../../assets/${data.img + (this.isMobile() ? '@1x.png' : '@2x.png')}`)} alt="" />
      </Parallax.Layer>
      <Parallax.Layer offset={offset} speed={0.5 * speed}>
        <div className="Carousel-head-wrapper Width-golden">
          <div className="Carousel-head">
            <div className="Carousel-head-text">
              <div className="Carousel-head-title">
                <h1 className="Title-primary Text-white">
                  {data.title}
                </h1>
                <Link to={data.goTo}>
                  <div className="Body Text-bold Text-white Opacity-50">
                    {'Learn More >'}
                  </div>
                </Link>

              </div>
              {this._renderDownloadLinks(data)}
            </div>
          </div>
        </div>
      </Parallax.Layer>
      {/* <div className="Carousel-image"> */}
      {/* </div> */}
      {/* </div> */}
    </React.Fragment>;
  }

  scroll(to) {
    this.parallax.scrollTo(to);
  }
  onSwipeStart(event) {
    this.clearInterval();
    // console.log(event.changedTouches);
    this.setState({ changedTouch: event.changedTouches[0] });
  }

  onSwipeEnd(event) {
    let newX = event.changedTouches[0].clientX;
    let width = window.innerWidth;
    let offset = this.state.changedTouch.clientX - newX;
    let index = Math.floor(Math.abs(offset / width));
    let extra = Math.abs(offset) % width;
    index = index + ((extra > (width / 4)) ? 1 : 0);
    index = index * (offset < 0 ? -1 : 1);
    let target = this.state.currentIndex + index;
    if (target < 0) target = 0;
    else if (target > this.state.data.length - 1) target = this.state.data.length - 1;
    this.goTo(target);    
  }

  render() {
    return (
      <div className="Carousel-container" >
        <div className="Carousel-gallery">
          {this._renderIndicators()}
          <div className="Carousel-arrows">
            <button type="button" title={'Go to previous'} className="Carousel-arrow" onClick={() => this.goTo(this.state.currentIndex - 1)}>
              <FontAwesomeIcon icon="chevron-left" />
            </button>
            <button type="button" title={'Go to next'} className="Carousel-arrow" onClick={() => this.goTo(this.state.currentIndex + 1)}>
              <FontAwesomeIcon icon="chevron-right" />
            </button>
          </div>
        </div>
        <div className="Carousel-details-background">
          <div className="Carousel-details" onMouseEnter={() => this.clearInterval()} onMouseLeave={() => this.setInterval()} onTouchStart={(this.onSwipeStart.bind(this))} onTouchEnd={(this.onSwipeEnd.bind(this))}>
            <Parallax ref={pa => this.parallax = pa} pages={this.state.data.length} horizontal scrolling={isMobile}>
              {this.state.data.map(data => <CarouselPost key={data.index} offset={data.index} data={data} type={data.type} />)}
            </Parallax>
          </div>
        </div>
      </div>

    );
  }
}

Carousel.propTypes = {
  updateBackground: PropTypes.func.isRequired,
};

export default Carousel;