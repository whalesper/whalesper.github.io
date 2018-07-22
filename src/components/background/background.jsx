import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './background.css';

class Background extends Component {

  selectTab(index) {
    let displayTabs = this.state.tabs.slice();
    let selectedTab = this.state.displayTabs[index];
    displayTabs.splice(displayTabs.indexOf(selectedTab), 1);
    this.setState({
      selectedTab: selectedTab,
      displayTabs: displayTabs
    });
  }

  _renderTabs() {
    let index = -1;
    return <div className="Tabs">
      {this.state.displayTabs.map(x => {
        index++;
        return <div key={index} className="Tab" onClick={() => this.selectTab(index)}>
          {x}
        </div>;
      })}
    </div>;


  }

  render() {
    return (
      <img className="Background" src={this.props.src} alt="bg" />
    );
  }
}

Background.propTypes = {
  src: PropTypes.string.isRequired
};

export default Background;