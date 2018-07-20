import React, { Component } from 'react';

import './product-missing.css';
import Banner from '../../../components/banner/banner';
import Background from '../../../components/background/background';

class ProductMissingPage extends Component {

  componentDidMount() {
    document.title = 'Oops..didn\'t find that | Products | Whalesper Technology Inc.';
  }

  render() {
    return <div>
      <Background
        src={require('../../../assets/emile-seguin-211406-unsplash.jpg')}
      />
      <div className='Image-overlay'>
        <h1 className='Title-primary Text-white Text-center'>
          Whalesper
        </h1>
      </div>
      <div className='App-content'>
        <article className="Paragraph-container">
          {/* <h2 className="Title-secondary Text-left">Whalesper</h2> */}
          <p className='Text-left Body'>
            We have previously worked together and launched the product, Whalesper, at March 2017. It is originally an AI-powered local news aggregation iOS app. So far, we harvested nearly 31K users around Toronto area and ranked fourth in App Store Toronto search result.
          </p>
          <p className='Text-left Body'>
            The Whalesper app now uses NLP(natural language processing) to auto-classify around 200 feeds every day into target topics and make summarization for user.
          </p>

          <Banner
            title={'Whalesper'}
            subtitle={'Discover this city'}
            icon={require('../../../assets/whalesper-white.svg')}
            link={'https://itunes.apple.com/ca/app/%E9%B2%B8%E8%AF%AD-%E5%A4%9A%E4%BC%A6%E5%A4%9A%E5%90%83%E5%96%9D%E7%8E%A9%E4%B9%90%E5%A4%B4%E6%9D%A1%E8%B5%84%E8%AE%AF/id1196585674?mt=8'}
          />
        </article>
      </div>
    </div>;
  }

}

export default ProductMissingPage;
