import React, { Component } from 'react';
import '../styles/background.css';

class Background extends Component {

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
        <img className="Background" src={this.props.src} alt="bg" />
    );
  }
}

export default Background;