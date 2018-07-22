import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Trail } from 'react-spring';
import { PropTypes } from 'prop-types';

import './tab.css';

const initialState = {
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
      link: '/events'
    }, {
      index: 2,
      title: 'Products',
      link: '/products'
    }, {
      index: 3,
      title: 'About Us',
      link: '/about'
    }],
  displayTabs: [],
  top: true
};

class Tab extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.setState({ displayTabs: this.state.tabs });
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    if (window.scrollY < 100) {
      this.setState({ top: true });
      this.props.updateTop(true && !this.state.expanded);
    } else {
      if (this.state.top) this.setState({ top: false });
      this.props.updateTop(false);
    }

  }

  toggleTabs() {
    if (!this.state.expanded) this.props.updateTop(false);
    else this.props.updateTop(this.state.top);
    this.setState({ expanded: !this.state.expanded });
  }

  selectTab(index) {
    let displayTabs = this.state.tabs.slice();
    let selectedTab = this.state.displayTabs[index];
    // displayTabs.splice(displayTabs.indexOf(selectedTab), 1);
    this.setState({
      selectedTab: selectedTab,
      displayTabs: displayTabs,
      expanded: false,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.props.updateTop(true);
  }

  selectTabMobile(index) {
    let displayTabs = this.state.tabs.slice();
    let selectedTab = this.state.tabs[index];
    displayTabs.splice(displayTabs.indexOf(selectedTab), 1);
    this.setState({
      selectedTab: selectedTab,
      displayTabs: displayTabs,
      expanded: false
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.props.updateTop(true);
  }

  _renderTabs() {
    let index = -1;
    return <div className="Tabs">
      {this.state.displayTabs.map(x => {
        let i = index;
        i++;
        index++;
        return x.link === '/'
          ? <Link to={x.link} key={index} className={`Tab ${this.state.top ? 'Top' : ''}`} onClick={() => this.selectTab(i)}>
            {x.title}
          </Link>
          : <NavLink activeClassName='active' to={x.link} key={index} className={`Tab ${this.state.top ? 'Top' : ''}`} onClick={() => this.selectTab(i)}>
            {x.title}
          </NavLink>;
      })}
    </div>;
  }

  _renderDesktop() {
    return (
      <div className={`Tab-container ${this.state.top ? 'Top' : ''}`}>
        <NavLink className={`Top-logo-container ${this.state.top ? 'Top' : ''}`} to="/">
          <svg id="Layer_1" alt='whalesper logo' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.79 49.43">
            <path className="cls-1" d="M972.77,522.07a19.1,19.1,0,0,1-9.17-2.17c-2.63-1.44-2.84-3.12-6.22-4.81a18.31,18.31,0,0,0-14.17-.67,23,23,0,0,0-13.71,29.44A28.71,28.71,0,0,0,966.3,561a35.88,35.88,0,0,0,21.58-45.53A20.44,20.44,0,0,1,972.77,522.07Z" transform="translate(-928.11 -513.3)" />
          </svg> Whalesper
        </NavLink>

        {this._renderTabs()}
      </div>
    );
  }

  _renderMobile() {
    return (
      <div className={`Tab-container ${this.state.top && !this.state.expanded ? 'Top' : ''}`}>
        <NavLink className={`Top-logo-container ${this.state.top && !this.state.expanded ? 'Top' : ''}`} to="/">
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.79 49.43">
            <path className="cls-1" d="M972.77,522.07a19.1,19.1,0,0,1-9.17-2.17c-2.63-1.44-2.84-3.12-6.22-4.81a18.31,18.31,0,0,0-14.17-.67,23,23,0,0,0-13.71,29.44A28.71,28.71,0,0,0,966.3,561a35.88,35.88,0,0,0,21.58-45.53A20.44,20.44,0,0,1,972.77,522.07Z" transform="translate(-928.11 -513.3)" />
          </svg> Whalesper
        </NavLink>
        <div className="Tabs">
          <a className={'Tab-toggle'} onClick={() => this.toggleTabs()}>
            <span className={`Tab-toggle-text ${this.state.top && !this.state.expanded ? 'Top' : ''}`}>{this.state.selectedTab.title}</span> <FontAwesomeIcon className={`Tab-chevron ${this.state.expanded ? '' : 'Collapsed'} ${this.state.top && !this.state.expanded ? 'Top' : ''}`} icon={'chevron-up'} />
          </a>
          <Trail from={{ opacity: 0, ScaleY: '-50%' }} to={{ opacity: 1, ScaleY: '0%' }} keys={this.state.tabs.map(item => item.index)}>
            {this.state.expanded ?
              this.state.displayTabs.map(x => styles => <NavLink style={{ ...styles }} activeClassName='active' to={x.link} className="Body No-margin Tab" onClick={() => this.selectTabMobile(x.index)}>
                {x.title}
              </NavLink>) : []}
          </Trail>
        </div>
      </div>
    );
  }

  render() {
    return isMobile ? this._renderMobile() : this._renderDesktop();
  }
}

Tab.propTypes = {
  updateTop: PropTypes.func.isRequired
};

export default Tab;