import React, { Component, Fragment } from 'react';
import IntroVideo from '@videos/intro-video-compressed.mp4';
import TopLayerAsyncWrapper from '@components/TopLayer';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div id="intro-video"></div>
        <TopLayerAsyncWrapper source={IntroVideo} />
      </ThemeProvider>
    );
  }
}

export default App;
