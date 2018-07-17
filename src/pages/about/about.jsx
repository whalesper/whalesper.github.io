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
        src={require('../../assets/rawpixel-250087-unsplash.jpg')}
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
            image={require('../../assets/team/shunzheyu.jpg')}
          />
          <Guy
            name='Gloria (Bihan) Zhu'
            title='Co-founder'
            email='bihan.zhu@mail.utoronto.ca'
            image={require('../../assets/team/bihanzhu.jpg')}
            instagram='tiamog'
          />
          <Guy
            name='Ajax (Jiacheng) Jiang'
            title='Co-founder'
            email='ajax.jiang@mail.utoronto.ca'
            image={require('../../assets/team/jiachengjiang.jpg')}
            instagram='b4whitby'
          />
          <Guy
            name='Hao Ren Zhong'
            title='Designer, Developer'
            email='haoren.zhong@mail.utoronto.ca'
            image={require('../../assets/team/haorenzhong.jpg')}
            instagram='neroah_z'
          />
          <Guy
            name='Kinder (Jianda) Chen'
            title='Data Scientist, Developer'
            email='jianda.chen@mail.utoronto.ca'
            instagram='chenkinder'
            image={require('../../assets/team/jiandachen.jpg')}
          />
        </div>
        <a id="contact"></a>
      </div>
    </div>;
  }

}

export default AboutPage;
