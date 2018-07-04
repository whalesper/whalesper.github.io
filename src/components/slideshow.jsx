import React, { Component } from 'react';
import '../styles/slideshow.css';

class Slideshow extends Component {

  state = {
    selectedTab: 'Event',
    tabs: ['Events', 'Products', 'Blog', 'About Us'],
    displayTabs: []
  }

  componentWillMount() {
    this.setState({ displayTabs: this.state.tabs }, () => this.selectTab(0));
  }

  selectTab(index) {
    let displayTabs = this.state.tabs.slice();
    let selectedTab = this.state.displayTabs[index];
    displayTabs.splice(displayTabs.indexOf(selectedTab), 1);
    this.setState({
      selectedTab: selectedTab,
      displayTabs: displayTabs
    })
  }

  _renderTabs() {
    let index = -1;
    return <div className="Tabs">
      {this.state.displayTabs.map(x => {
        index++;
        return <div key={index} className="Tab" onClick={() => this.selectTab(index)}>
          {x}
        </div>
      })}
    </div>


  }

  render() {
    return (
      <div className="Slideshow-container">
        <img className="Slideshow-background" src={require("../assets/background.jpg")} alt="bg" />
        <div className="Image-overlay">
            <div className="Overlay-text">
              Let food find you before you find them
            </div>
          </div>
      </div>
    );
  }
}

export default Slideshow;