import React, { Component } from 'react';
import './tab.css';
import logo from '../../assets/whalesper-black.svg'
import { NavLink } from "react-router-dom";
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Transition, Trail } from 'react-spring';

class Tab extends Component {

  state = {
    expanded: false,
    selectedTab: 'Event',
    tabs: [
      {
        index: 0,
        title: 'Home', 
        link: '/'
      }, {
        index: 1,
        title: 'Events', 
      link: 'events'
      }, {
        index: 2,
        title: 'Products', 
      link: 'products'
      },{
        index: 3,
        title: 'About Us',
      link: 'about'
      }],
    displayTabs:[]
  }

  componentWillMount() {
    this.setState({displayTabs: this.state.tabs}, () => this.selectTab(0));
  }

  toggleTabs() {
    this.setState({expanded: !this.state.expanded})
  }

  selectTab(index) {
    console.log(index)
    let displayTabs = this.state.tabs.slice();
    let selectedTab = this.state.displayTabs[index];
    // displayTabs.splice(displayTabs.indexOf(selectedTab), 1);
    // console.log(selectedTab, displayTabs)
    this.setState({
      selectedTab: selectedTab,
      displayTabs: displayTabs,
      expanded: false
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

  _renderDesktop() {
    return (
      <div className="Tab-container">
        <NavLink className="Top-logo-container" to="/">
          <img className="Logo" src={logo} alt="Whalesper"/> Whalesper
        </NavLink>

        {this._renderTabs()}
      </div>
    );
  }

  _renderMobile() {
    let index = -1;
    return (
      <div className="Tab-container">
        <NavLink className="Top-logo-container" to="/">
          <img className="Logo" src={logo} alt="Whalesper"/> Whalesper
        </NavLink>
        <div className="Tabs">
        <div className="Tab-toggle" onClick={() => this.toggleTabs()}>
        <FontAwesomeIcon className={`Tab-chevron ${this.state.expanded ? '' : 'Collapsed'}`} icon={"chevron-up"} /> {this.state.selectedTab.title}
        </div>
        <Trail from={{ opacity: 0, translateY: '-50%' }} to={{ opacity: 1, translateY: '0%' }} keys={this.state.tabs.map(item => item.key)}>
    {this.state.expanded ? 
      this.state.displayTabs.map(x => styles =><NavLink style={{...styles}} activeClassName='active' to={x.link} key={x.index} className="Tab Body" onClick={()=> this.selectTab(x.index)}>
      {x.title}
    </NavLink>) : []}
</Trail>
        {/* <Transition
        native
    keys={this.state.tabs.map(item => item.index)}
    from={{ opacity: 0, height: 0 }}
    enter={{ opacity: 1, height: 20 }}
    leave={{ opacity: 0, height: 0, pointerEvents: 'none' }}>
    {this.state.tabs.map(x => styles => <NavLink style={{...styles}} activeClassName='active' to={x.link} key={x.index} className="Tab" onClick={()=> this.selectTab(x.index)}>
      {x.title}
    </NavLink>)}
</Transition> */}
        {/* {this.state.expanded ? this._renderTabs() : null} */}
        </div>
      </div>
    );
  }

  render() {
    return isMobile ? this._renderMobile() : this._renderDesktop();
  }
}

export default Tab;