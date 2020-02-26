import React, { Component, Fragment } from 'react';
import IntroVideo from '@videos/intro-video.mp4';
import TopLayer from '@components/TopLayer';
import AsyncLoaderComponent from '@components/AsyncLoaderComponent';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import StyledSkeleton from '@components/StyledSkeleton';
import Skeleton from '@material-ui/lab/Skeleton';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        {/* Top Layer */}
        <AsyncLoaderComponent
          actualComponent={<TopLayer source={IntroVideo} />}
          delay={3000}
          skeleton={
            <Fragment>
              <StyledSkeleton />
              <Skeleton
                animation="wave"
                style={{ transform: 'none' }}
                height={'100vh'}
                width={'100%'}
              />
            </Fragment>
          }
        />
        {/* Top Layer Finish */}
      </ThemeProvider>
    );
  }
}

export default App;
