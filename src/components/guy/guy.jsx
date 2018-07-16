import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './guy.css';

class Guy extends Component {

  componentDidMound() {
  }

  render() {
    const { name, title, email } = this.props;
    return (
      <div className="Guy-container">
        <img className="Guy-photo" alt='profile' src='https://media.tenor.com/images/014aede7c324d769e4657ff3f8979504/tenor.png' />
        <div className="Guy-info">
          <div className="Guy-name">
            {name}
          </div>
          <div className="Guy-divider">
          </div>
          <div className="Guy-title">
            {title}
          </div>
          <div className="Guy-email">
            {email}
          </div>
        </div>
      </div>
    );
  }
}

Guy.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default Guy;