import React, { Component } from 'react';
import './about.css';
import Guy from '../../components/guy/guy';
import Background from '../../components/background/background';

class AboutPage extends Component {

  componentDidMount() {
    document.title = 'About Us | Whalesper Technology Inc.';
  }

  render() {
    return <div>
      <Background
        src={require('../../assets/background.jpg')}
      />
      <div className='Image-overlay'>
        <h1 className='Title-primary Text-white Text-center'>
          Team Whalesper
        </h1>
      </div>
      <div className='App-content'>
        <a id="team"></a>
        <div className='Guy-wrapper'>
          <Guy
            name='Luffy (Shunzhe) Yu'
            title='Founder'
            email='luffy.yu@mail.utoronto.ca'
          />
          <Guy
            name='Gloria (Bihan) Zhu'
            title='Co-founder'
            email='bihan.zhu@mail.utoronto.ca'
          />
          <Guy
            name='Ajax (Jiacheng) Jiang'
            title='Co-founder'
            email='ajax.jiang@mail.utoronto.ca'
          />
          <Guy
            name='Hao Ren Zhong'
            title='Designer, Developer'
            email='haoren.zhong@mail.utoronto.ca'
          />
          <Guy
            name='Kinder (Jianda) Chen'
            title='Data Scientist, Developer'
            email='jianda.chen@mail.utoronto.ca'
          />
        </div>
        <a id="contact"></a>
      </div>
    </div>;
  }

}

export default AboutPage;
