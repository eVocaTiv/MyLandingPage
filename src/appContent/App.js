import React, { Component, Fragment } from 'react';
import IntroVideo from '@videos/intro-video-compressed.mp4';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import {
  TopLayerContainer,
  VisionContainer,
  AboutMeContainer,
  FooterContainer,
} from '@containers';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { isTopLayerLoaded } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <TopLayerContainer source={IntroVideo} />
        {isTopLayerLoaded && (
          <Fragment>
            <VisionContainer />
            <AboutMeContainer />
            <FooterContainer />
          </Fragment>
        )}
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  isTopLayerLoaded: state.isVideoLoaded,
});

export default connect(mapStateToProps, null)(App);
