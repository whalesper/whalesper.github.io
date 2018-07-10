import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Loadable from 'react-loadable';
import React, { Component } from 'react';
import './App.css';
import Post from './components/post';
import Tab from './components/tab';
// import Slideshow from './components/slideshow';
import Disclaimer from './components/disclaimer';
// import Banner from './components/banner';
import mds from './mds/events/'
import Background from './components/background';
import EventPage from './pages/events';
import AboutPage from './pages/about';
import ProductsPage from './pages/products';

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
    document.title = 'Whalesper'
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
            <Route path="/products" component={ProductsPage} />
            <Route path="/events" component={EventPage} />
            <Route path="/about" component={AboutPage} />
        <Disclaimer />
      </div>
      </Router>
    );
  }
}

export default App;


