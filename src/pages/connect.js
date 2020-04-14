import React, { Component } from 'react';
import { FooterContainer } from '@containers';
import ParallaxWrapper from '@src/appContent/ParallaxWrapper';
import ScrollAnimation from 'react-animate-on-scroll';
import { checkForInvalidBrowser } from '@utils/commonUtils';

class Footer extends Component {
  componentDidMount = () => {
    checkForInvalidBrowser();
  };
  render() {
    return (
      <ScrollAnimation animateIn="fadeInRight">
        <ParallaxWrapper />
        <FooterContainer />
      </ScrollAnimation>
    );
  }
}

export default Footer;
