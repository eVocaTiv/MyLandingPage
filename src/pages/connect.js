import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import { FooterContainer } from '@containers';
import ParallaxWrapper from '@src/appContent/ParallaxWrapper';
import ScrollAnimation from 'react-animate-on-scroll';

class Footer extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ScrollAnimation animateIn="fadeInRight">
          <ParallaxWrapper />
          <FooterContainer />
        </ScrollAnimation>
      </ThemeProvider>
    );
  }
}

export default Footer;
