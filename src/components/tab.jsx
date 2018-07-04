import React, { Component } from 'react';
import '../styles/tab.css';

class Tab extends Component {

  state = {
    selectedTab: 'Event',
    tabs: ['Events', 'Products', 'Blog', 'About Us'],
    displayTabs:[]
  }

  componentWillMount() {
    this.setState({displayTabs: this.state.tabs}, () => this.selectTab(0));
  }

  selectTab(index) {
    console.log(index)
    let displayTabs = this.state.tabs.slice();
    let selectedTab = this.state.displayTabs[index];
    displayTabs.splice(displayTabs.indexOf(selectedTab), 1);
    console.log(selectedTab, displayTabs)
    this.setState({
      selectedTab: selectedTab,
      displayTabs: displayTabs
    })
  }

  _renderTabs() {
    let index = -1;
    return <div className="Tabs">
    {this.state.displayTabs.map(x => {
      let i = index;
      i++;
      index++;
    return <div key={index} className="Tab" onClick={()=> this.selectTab(i)}>
      {x}
    </div>})}
  </div>

    
  }

  render() {
    return (
      <div className="Tab-container">
        <div className="Selected-tab">
          {this.state.selectedTab}
        </div>

        {this._renderTabs()}
      </div>
    );
  }
}

export default Tab;