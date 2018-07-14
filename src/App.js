import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Transition, animated, Spring, config } from 'react-spring';

import './App.css';
import Post from './components/post/post';
import Tab from './components/tab/tab';
import Footer from './components/footer/footer';
import mds from './mds/events/'
import Background from './components/background/background';
import EventPage from './pages/events/events';
import AboutPage from './pages/about/about';
import ProductsPage from './pages/products/products';
import WhalesperPage from './pages/whalesper';
import HomePage from './pages/home/home';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronLeft);
library.add(faChevronRight);
const Loading = () => <div>Loading...</div>;

// const Events = Loadable({
//   loader: () => import('./pages/events'),
//   loading: Loading,
// });

// const About = Loadable({
//   loader: () => import('./pages/about'),
//   loading: Loading,
// });

const Enhance = ({ match: { params }, style }, Component) => (
    <Component style={{ ...style }} />
)

class App extends Component {
  state = { loaded: false }
  
  componentDidMount() {
    document.title = 'Whalesper';

    ReactGA.initialize('UA-122173913-1');
    ReactGA.pageview(window.location.pathname + window.location.search);

    this.setState({ loaded: true })
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
          <header className="App-header">
            <Tab />
          </header>
              <Switch location={location}>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/products" component={ProductsPage} />
                <Route exact path="/products/whalesper" component={WhalesperPage} />
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


