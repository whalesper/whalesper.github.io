import React, { Component } from 'react';
import './App.css';
import Post from './components/post';
import Tab from './components/tab';
import Slideshow from './components/slideshow';
import Disclaimer from './components/disclaimer';
import Banner from './components/banner';

class App extends Component {

  componentDidMount() {
    document.title='Whalesper'
  }

  render() {
    return (
      <div className="App">
        <Banner />
        <div className="App-content">
        <header className="App-header">
          <Tab />
        </header>
          <Post />
          {/* <Post />
          <Post /> */}
          <Disclaimer/>
        </div>
        <div className="App-slideshow">
        <Slideshow />
        </div>
      </div>
    );
  }
}

export default App;
