import React, { Component } from 'react';
import { Parallax } from 'react-spring';
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import downloadFromApple from '../../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';
import downloadFromGoogle from '../../assets/google-play-badge.png';
import './carousel.css';

const downloadIOSAlt = (<div className="Carousel-head-text-download-alt">
  <div className="Carousel-head-text-download-alt-small">iOS Version</div>
  Coming Soon
</div>);

const downloadAndroidAlt = (<div className="Carousel-head-text-download-alt">
  <div className="Carousel-head-text-download-alt-small">Android Version</div>
  Coming Soon
</div>);

const initialState = {
  currentIndex: 0,
  transition: false,
  data: [
    {
      index: 0,
      img: 'whalesper-header',
      title: 'Whalesper',
      goTo: '/products/whalesper',
      detailsTitle: 'Meet Whalesper, our first App',
      detailsBody: 'We have previously worked together and launched the product, Whalesper, at March 2017. It is originally an AI-powered local news aggregation iOS app. So far, we harvested nearly 31K users around Toronto area and ranked fourth in App Store Toronto search result.',
      downloadIOS: 'https://itunes.apple.com/ca/app/%E9%B2%B8%E8%AF%AD-%E5%A4%9A%E4%BC%A6%E5%A4%9A%E5%90%83%E5%96%9D%E7%8E%A9%E4%B9%90%E5%A4%B4%E6%9D%A1%E8%B5%84%E8%AE%AF/id1196585674?mt=8',
    },
    {
      index: 1,
      img: 'iit-header',
      title: 'iit',
      goTo: '/products/whalesper',
      detailsTitle: 'Let food find you before you find them',
      detailsBody: 'iit, a new deep learning platform that lets food find you before you find it. Swipe through great images of dishes from nearby restaurants. iit is the first personalized app that helps you decide what to eat based on your preferences. ',
    }
  ]
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
    this.setInterval();
  }

  setInterval(index = 10000) {
    this.interval = setInterval(() => this.goTo(this.state.currentIndex + 1), index);
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
      <div
        className={`Carousel-indicator ${data.index === this.state.currentIndex ? 'active' : ''}`}
        key={data.index}
        onClick={() => this.goTo(data.index)}>
      </div>);
  }

  _renderIndicators() {
    if (!isMobile) {
      return <div className="Carousel-indicators">
        {this.state.data.map(x => this._renderIndicator(x))}
      </div>;
    } else return null;
  }

  _renderDownloadLinks(data) {
    // const data = this.state.data[this.state.currentIndex];
    return <div className="Carousel-head-text-download-wrapper">
      {data.downloadIOS ? <a href={data.downloadIOS} target="_blank" rel="noopener noreferrer"><img src={downloadFromApple} className="Carousel-head-text-download" alt='download ios' /></a> : downloadIOSAlt}
      {data.downloadAndroid ? <a href={data.downloadAndroid} target="_blank" rel="noopener noreferrer"><img src={downloadFromGoogle} className="Carousel-head-text-download" alt='download android' /></a> : downloadAndroidAlt}
    </div>;
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

  render() {
    return (
      <div className="Carousel-container" onScroll={() => this.clearInterval()} >
        <div className="Carousel-gallery">
          {this._renderIndicators()}
          <div className="Carousel-arrows">
            <div className="Carousel-arrow" onClick={() => this.goTo(this.state.currentIndex - 1)}>
              <FontAwesomeIcon icon="chevron-left" />
            </div>
            <div className="Carousel-arrow" onClick={() => this.goTo(this.state.currentIndex + 1)}>
              <FontAwesomeIcon icon="chevron-right" />
            </div>
          </div>
        </div>
        <div className="Carousel-details-background">
          <div className="Carousel-details" onMouseEnter={() => this.clearInterval()} onMouseLeave={() => this.setInterval()}>
            <Parallax ref={pa => this.parallax = pa} pages={this.state.data.length} horizontal scrolling={isMobile}>
              {this.state.data.map(data => this._renderDetails(data))}
            </Parallax>
          </div>
        </div>
      </div>

    );
  }
}

export default Carousel;