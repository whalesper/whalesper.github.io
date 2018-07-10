import React, { Component } from 'react';
import '../styles/tab.css';
import logo from '../assets/whalesper-black.svg'
import { NavLink } from "react-router-dom";

class Tab extends Component {

  state = {
    selectedTab: 'Event',
    tabs: [
      {
      title: 'Events', 
      link: 'events'
      }, {
      title: 'Products', 
      link: 'products'
      }, {
      title: 'Blog', 
      link: 'blog'
      }, {
      title: 'About Us',
      link: 'about'
      }],
    displayTabs:[]
  }

  componentWillMount() {
    this.setState({displayTabs: this.state.tabs}, () => this.selectTab(0));
  }

  selectTab(index) {
    console.log(index)
    let displayTabs = this.state.tabs.slice();
    let selectedTab = this.state.displayTabs[index];
    // displayTabs.splice(displayTabs.indexOf(selectedTab), 1);
    // console.log(selectedTab, displayTabs)
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
    return <NavLink activeClassName='active' to={x.link} key={index} className="Tab" onClick={()=> this.selectTab(i)}>
      {x.title}
    </NavLink>})}
  </div>
 
    
  }

  render() {
    return (
      <div className="Tab-container">
        <div className="Top-logo-container">
          <img className="Logo" src={logo} alt="Whalesper"/> Whalesper
        </div>

        {this._renderTabs()}
      </div>
    );
  }
}

export default Tab;