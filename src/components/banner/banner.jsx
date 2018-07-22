import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './banner.css';

class Banner extends Component {
  render() {
    const {icon, title, subtitle, buttonText, link} = this.props;
    return (
      <div className="Banner-container">
        <div className="Left-container">
          <div className="Logo-container">
            <img className="App-download-logo" src={icon} alt={`${title} app logo`} />
          </div>
          <div className="Text-container">
            <h1 className="Title-primary No-margin">
              {title}
            </h1>
            <div className="Body Text-smaller  No-margin Banner-text-secondary">
              {subtitle}
            </div>
          </div>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="Download-button">{buttonText ? buttonText : 'Get'}</a>
      </div>
    );
  }
}

Banner.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string
};

export default Banner;