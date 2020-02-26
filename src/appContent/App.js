import React, { Component, Fragment } from 'react';
import IntroVideo from '@videos/intro-video.mp4';
import TopLayer from '@components/TopLayer';
import AsyncLoaderComponent from '@components/AsyncLoaderComponent';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';

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
