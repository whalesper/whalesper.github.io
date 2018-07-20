import React, { PureComponent } from 'react';
import { Parallax } from 'react-spring';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { PropTypes } from 'prop-types';

import downloadFromApple from '../../../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg';
import downloadFromGoogle from '../../../assets/google-play-badge.png';

import '../carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const downloadIOSAlt = (<div className="Carousel-head-text-download-alt">
  <div className="Carousel-head-text-download-alt-small">iOS Version</div>
  Coming Soon
</div>);

const downloadAndroidAlt = (<div className="Carousel-head-text-download-alt">
  <div className="Carousel-head-text-download-alt-small">Android Version</div>
  Coming Soon
</div>);


const speed = 1;

class CarouselPost extends PureComponent {

  isMobile() {
    return isMobile;
  }

  _renderDownloadLinks(data) {
    // const data = this.state.data[this.state.currentIndex];
    if (data.beta) {
      return <div className="Carousel-head-text-download-wrapper">
        <a href={data.beta} target="_blank" rel="noopener noreferrer">
          <div className="Carousel-head-text-download-alt">
            <div className="Carousel-head-text-download-alt-small">Beta Test Coming Soon</div>
            Join Today
          </div>
        </a>
      </div>;
    }
    else return <div className="Carousel-head-text-download-wrapper">
      {data.downloadIOS ? <a href={data.downloadIOS} target="_blank" rel="noopener noreferrer"><img src={downloadFromApple} className="Carousel-head-text-download" alt='download ios' /></a> : downloadIOSAlt}
      {data.downloadAndroid ? <a href={data.downloadAndroid} target="_blank" rel="noopener noreferrer"><img src={downloadFromGoogle} className="Carousel-head-text-download" alt='download android' /></a> : downloadAndroidAlt}
    </div>;
  }

  _renderEventInfo(data) {
    return <div className="Carousel-head-text-event-info-wrapper">
      {/* {JSON.stringify(data)} */}
      <div className="Body Text-bold Text-white Opacity-50 Row">
        <div className="Event-detail-icon">
          <FontAwesomeIcon icon='calendar' />
        </div> {data.date}
      </div>
      <div className="Body Text-bold Text-white Opacity-50 Row">
        <div className="Event-detail-icon">
          <FontAwesomeIcon icon='location-arrow' />
        </div> {data.location}
      </div>
    </div>;
  }

  _renderBottom(type, data) {
    switch (type) {
    case 'product':
      return this._renderDownloadLinks(data);
    case 'event':
      return this._renderEventInfo(data);
    default:
      return this._renderDownloadLinks(data);
    }
  }

  render() {
    const { offset, data, type } = this.props;
    return <React.Fragment>
      <Parallax.Layer offset={offset} speed={0 * speed}>
        <div className="Carousel-body Width-golden">
          <h2 className="Title-secondary">
            {data.detailsTitle}
          </h2>
          <div className="Body">
            {data.detailsBody}
          </div>
        </div>
      </Parallax.Layer>
      <Parallax.Layer offset={offset} speed={2 * speed}>
        <img className="Carousel-image" src={require(`../../../assets/carousel/${data.img + (this.isMobile() ? '@1x.png' : '@2x.png')}`)} alt={`${data.detailsTitle}`} presentation="true"/>
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
              {this._renderBottom(type, data)}
            </div>
          </div>
        </div>
      </Parallax.Layer>
    </React.Fragment>;
  }
}

CarouselPost.propTypes = {
  offset: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};

export default CarouselPost;