import React, { Component } from 'react';
import '../styles/post.css';

class Post extends Component {
  render() {
    return (
      <div className="Container">
        <div className="Title">
          Show me your food
        </div>
        <div className="Meta-info">
          <div className="Date">
            2018 / 07 / 17   
          </div> 
          <div className="Separator">
          </div>
          <div className="Author">
            Whalesper Technology Inc
          </div>
        </div>
        <div className="Post-body">
          Start a food photography competition with us for free and let world know your delicious looking food!<br />
          During 3 day’s period, our platform will hold photo scoring server for your retaurant. Users need to do following steps to participate in the competition:<br />
          <ul>
            <li>Scan the qr code we provided and take photos through our application. Each taken picture will be decorated with our stylish templates and get a score based on the quality of the photo.</li>
            <li>Share the result and compete with your friends in any existing social media.</li>
            <li>Winners on the day can get special award from our application/ your restaurants</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Post;