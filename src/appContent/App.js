import React, { Component } from 'react';
import IntroVideo from '@videos/intro-video-compressed.mp4';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import { TopLayerContainer, VisionContainer } from '@containers';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { isTopLayerLoaded } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <TopLayerContainer source={IntroVideo} />
        {isTopLayerLoaded && (
          <VisionContainer />
        )}
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  isTopLayerLoaded: state.isVideoLoaded,
});

export default connect(mapStateToProps, null)(App);
