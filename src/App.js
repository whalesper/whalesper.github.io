import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import ReactGA from 'react-ga';

import './App.css';
import Post from './components/post/post';
import Tab from './components/tab/tab';
import Disclaimer from './components/disclaimer/disclaimer';
import mds from './mds/events/'
import Background from './components/background/background';
import EventPage from './pages/events/events';
import AboutPage from './pages/about/about';
import ProductsPage from './pages/products/products';
import WhalesperPage from './pages/whalesper';

const Loading = () => <div>Loading...</div>;

// const Events = Loadable({
//   loader: () => import('./pages/events'),
//   loading: Loading,
// });

// const About = Loadable({
//   loader: () => import('./pages/about'),
//   loading: Loading,
// });

class App extends Component {
  state = { mds: undefined }
  componentDidMount() {
    document.title = 'Whalesper';

    ReactGA.initialize('UA-122173913-1');
    ReactGA.pageview(window.location.pathname + window.location.search);

    this.setState({ mds: mds })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Tab />
          </header>
          <Route exact path="/" component={EventPage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exacr path="/products/whalesper" component={WhalesperPage} />
          <Route path="/events" component={EventPage} />
          <Route path="/about" component={AboutPage} />
          <Disclaimer />
        </div>
      </Router>
    );
  }
}

export default App;


