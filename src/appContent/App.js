import React, { Component } from 'react';
import IntroVideo from '@videos/intro-video-compressed.mp4';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import { TopLayer } from '@components';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <TopLayer source={IntroVideo} />
      </ThemeProvider>
    );
  }
}

export default App;
