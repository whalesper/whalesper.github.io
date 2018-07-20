import React, { Component } from 'react';
import Carousel from '../../components/carousel/carousel';
import Email from '../../components/email/email';
import './home.css';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    document.title = 'Home | Whalesper Technology Inc.';
  }

  setWhalesper(whalesper) {
    this.setState({whalesper: whalesper});
  }

  render() {
    return <div className={`Home-container ${this.state.whalesper ? 'whalesper' : ''}`}>
      <Carousel updateBackground={this.setWhalesper.bind(this)}/>

      {/* <div className='App-content'>
      <div className='Guy-wrapper'>
        <Post />
      </div>
    </div> */}
      <Email />
    </div>;
  }

}

export default HomePage;
