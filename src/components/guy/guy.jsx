import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './guy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

class Guy extends Component {

  componentDidMound() {
  }

  render() {
    const { name, title, email, image, instagram } = this.props;
    let img = image ? image : 'https://media.tenor.com/images/014aede7c324d769e4657ff3f8979504/tenor.png';
    return (
      <div className="Guy-container">
        <img className="Guy-photo" alt='profile' src={img} />
        <div className="Guy-info">
          <div className="Guy-name">
            {name}
          </div>
          <div className="Guy-divider">
          </div>
          <div className="Guy-title">
            {title}
          </div>
          <a href={`mailto:${email}`} className="Guy-email">
            {email}
          </a>
          <div className="Guy-social-container">

            {instagram ? <a href={`https://www.instagram.com/${instagram}`} className="Guy-social">
              <FontAwesomeIcon icon={faInstagram}/>
            </a> : null}
            {/* {instagram ? <a href={`https://www.instagram.com/${instagram}`} className="Guy-social">
              <FontAwesomeIcon icon={faInstagram}/>
            </a> : null} */}
          </div>
        </div>
      </div>
    );
  }
}

Guy.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  image: PropTypes.string,
  instagram: PropTypes.string
};

export default Guy;