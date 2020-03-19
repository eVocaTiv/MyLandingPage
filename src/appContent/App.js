import React, { Component, Fragment } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import {
  TopLayerContainer,
  VisionContainer,
  AboutMeContainer,
  FooterContainer,
  ProjectDisplayContainer,
} from '@containers';
import ParallaxWrapper from './ParallaxWrapper';
import ScrollAnimation from 'react-animate-on-scroll';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ScrollAnimation duration={1.5} animateOnce animateIn="zoomIn">
          <TopLayerContainer />
          <ScrollAnimation animateIn="zoomIn">
            <VisionContainer />
          </ScrollAnimation>

          <ScrollAnimation animateIn="zoomIn">
            <AboutMeContainer />
          </ScrollAnimation>

          <ScrollAnimation animateIn="zoomIn">
            <ProjectDisplayContainer />
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn">
            <ParallaxWrapper />
          </ScrollAnimation>
          <FooterContainer />
        </ScrollAnimation>
      </ThemeProvider>
    );
  }
}

export default App;
