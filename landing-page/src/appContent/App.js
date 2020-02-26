import React, { Component, Fragment } from 'react';
import IntroVideo from '@videos/intro-video.mp4';
import TopLayer from '@components/TopLayer';
import AsyncLoaderComponent from '@components/AsyncLoaderComponent';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import Skeleton from '@material-ui/lab/Skeleton';
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AsyncLoaderComponent
          actualComponent={<TopLayer source={IntroVideo} />}
          skeleton={
            <Skeleton height={'100vh'} width={'100vw'} animation="wave" />
          }
        />
      </ThemeProvider>
    );
  }
}

export default App;
