import React, { Component, Fragment } from 'react';
import IntroVideo from '@videos/intro-video-compressed.mp4';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import {
  TopLayerContainer,
  VisionContainer,
  AboutMeContainer,
  FooterContainer,
  ProjectDisplayContainer,
} from '@containers';
import { connect } from 'react-redux';
import ParallaxWrapper from './ParallaxWrapper';
import ScrollAnimation from 'react-animate-on-scroll';

class App extends Component {
  
  render() {
    return (
      <ThemeProvider theme={theme}>
        <TopLayerContainer />
          <Fragment>
            <VisionContainer />
            <AboutMeContainer />
            <ProjectDisplayContainer />
            <ScrollAnimation animateIn="fadeIn">
              <ParallaxWrapper />
            </ScrollAnimation>
            <FooterContainer />
          </Fragment>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  isTopLayerLoaded: state.isVideoLoaded,
});

export default connect(mapStateToProps, null)(App);
