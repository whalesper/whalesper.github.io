import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import ReactGA from 'react-ga';

import './App.css';
import Tab from './components/tab/tab';
import Footer from './components/footer/footer';
import EventPage from './pages/events/events';
import AboutPage from './pages/about/about';
import ProductsPage from './pages/products/products';
import WhalesperPage from './pages/products/whalesper/whalesper';
import HomePage from './pages/home/home';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight, faChevronDown, faChevronUp, faLocationArrow, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import IitPage from './pages/products/iit/iit';

library.add(
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faChevronUp,
  faInstagram,
  faLocationArrow,
  faCalendar
);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      top: true
    };
  }

  componentDidMount() {
    document.title = 'Whalesper Technology Inc.';

    ReactGA.initialize('UA-122173913-1');
    ReactGA.pageview(window.location.pathname + window.location.search);

    this.setState({ loaded: true });
    this.tabs = React.createRef();
  }

  updateTop(top) {
    this.setState({top: top});
  }

  render() {
    return (
      <Router>
        <Route render={({ location }) => (
          // <Spring
          // config={config.slow}
          // toggle={this.state.loaded}
          //   from={{ opacity: 1, transform: 'translate3d(0%,10%,0)' }}
          //   to={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}>
          // {style => 
          <div className="App">
            <header className={`App-header ${this.state.top ? 'Top' : ''}`}>
              <Tab ref={tab => this.tabs = tab} updateTop={this.updateTop.bind(this)}/>
            </header>
            <Switch location={location}>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/products" component={ProductsPage} />
              <Route exact path="/products/whalesper" component={WhalesperPage} />
              <Route exact path="/products/iit" component={IitPage} />
              <Route path="/events" component={EventPage} />
              <Route path="/about" component={AboutPage} />
            </Switch>
            <Footer />
          </div>
          // } </Spring>
        )} />
      </Router>
    );
  }
}

export default App;


