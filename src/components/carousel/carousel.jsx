import React, { Component } from 'react';
import { Transition, animated, Spring, Parallax } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import downloadFromApple from '../../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'
import downloadFromGoogle from '../../assets/google-play-badge.png'
import './carousel.css';

const downloadIOSAlt = (<div className="Carousel-head-text-download-alt">
  <div className="Carousel-head-text-download-alt-small">iOS Version</div>
  Coming Soon
</div>)

const downloadAndroidAlt = (<div className="Carousel-head-text-download-alt">
  <div className="Carousel-head-text-download-alt-small">Android Version</div>
  Coming Soon
</div>)

class Carousel extends Component {

  state = {
    currentIndex: 0,
    transition: false,
    data: [
      {
        index: 0,
        img: require('../../assets/whalesper-header.png'),
        title: 'Whalesper',
        goTo: '/products/whalesper',
        detailsTitle: 'Meet Whalesper, our first App',
        detailsBody: `We have previously worked together and launched the product, Whalesper, at March 2017. It is originally an AI-powered local news aggregation iOS app. So far, we harvested nearly 31K users around Toronto area and ranked fourth in App Store Toronto search result.`,
        downloadIOS: 'https://itunes.apple.com/ca/app/%E9%B2%B8%E8%AF%AD-%E5%A4%9A%E4%BC%A6%E5%A4%9A%E5%90%83%E5%96%9D%E7%8E%A9%E4%B9%90%E5%A4%B4%E6%9D%A1%E8%B5%84%E8%AE%AF/id1196585674?mt=8',
      },
      {
        index: 1,
        img: require('../../assets/whalesper-phone.png'),
        title: 'iit',
        goTo: '/products/whalesper',
        detailsTitle: 'Let food find you before you find them',
        detailsBody: `iit, a new deep learning platform that lets food find you before you find it. Swipe through great images of dishes from nearby restaurants. iit is the first personalized app that helps you decide what to eat based on your preferences. `,
      }
    ]
  }

  goTo(index = 0) {
    this.clearInterval();
    console.log('going to ' + index)
    if (index < 0) {
      index = this.state.data.length - 1
    }
    index = (index <= this.state.data.length - 1) ? index : 0
    this.setState({
      currentIndex: index,
    });
    this.scroll(index)
    this.setInterval();
  }

  setInterval(index = 10000) {
    this.interval = setInterval(() => this.goTo(this.state.currentIndex + 1), index);
  }

  clearInterval() {
    clearInterval(this.interval);

  }

  componentDidMount() {
    this.goTo();
  }

  _renderIndicator(data) {
    return <div className={`Carousel-indicator ${data.index === this.state.currentIndex ? 'active' : ''}`} key={data.index} onClick={() => this.goTo(data.index)}>
    </div>
  }

  _renderIndicators() {
    return <div className="Carousel-indicators">
      {this.state.data.map(x => this._renderIndicator(x))}
    </div>
  }

  _renderDownloadLinks() {
    const data = this.state.data[this.state.currentIndex];
    return <div className="Carousel-head-text-download-wrapper">
      {data.downloadIOS ? <a href={data.downloadIOS} target="_blank"><img src={downloadFromApple} className="Carousel-head-text-download" /></a> : downloadIOSAlt}
      {data.downloadAndroid ? <a href={data.downloadAndroid} target="_blank"><img src={downloadFromGoogle} className="Carousel-head-text-download" /></a> : downloadAndroidAlt}
    </div>
  }

  _renderDetails(data) {
    let offset = data.index;
    return <React.Fragment key={offset}>
      <Parallax.Layer offset={offset} speed={0.3}>
        <div className="Carousel-head-wrapper">
          <div className="Carousel-head">
            <div className="Carousel-head-text">

              <div className="Carousel-head-title">

                <div className="Title-primary Text-white">
                  {data.title}
                </div>
                <div className="Body Text-bold Text-white Opacity-50">
                  Learn More >
              </div>
              </div>
              {this._renderDownloadLinks()}
            </div>
          </div>
        </div>
      </Parallax.Layer>
      {/* <div className="Carousel-image"> */}
      <Parallax.Layer offset={offset} speed={0.2}>
        <img className="Carousel-image" src={data.img} alt="" />
      </Parallax.Layer>
      {/* </div> */}
      {/* </div> */}
      <Parallax.Layer offset={offset} speed={0}>
        <div className="Carousel-body">
          <div className="Title-secondary">
            {data.detailsTitle}
          </div>
          <div className="Body">
            {data.detailsBody}
          </div>
          <div className="Body Text-bold Link">Learn More ></div>
        </div>
      </Parallax.Layer></React.Fragment>
  }

  scroll(to) {
    this.refs.parallax.scrollTo(to);
  }

  render() {
    return (
      <div className="Carousel-container">
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
            <Parallax ref="parallax" pages={this.state.data.length} horizontal scrolling={false}>
              {this.state.data.map(data => this._renderDetails(data))}
            </Parallax>
          </div>
        </div>
      </div>

    );
  }
}

export default Carousel;