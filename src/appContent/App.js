import React, { Component } from 'react';
import IntroVideo from '@videos/intro-video-compressed.mp4';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import { TopLayerContainer, VisionContainer } from '@containers';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <TopLayerContainer source={IntroVideo} />
        <VisionContainer />
      </ThemeProvider>
    );
  }
}

export default App;
