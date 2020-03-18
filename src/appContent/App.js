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
import { StyledSkeleton } from '@components';

class App extends Component {
  state = {
    isLoading: true,
  };

  getDisplay = () => {
    const {isLoading } = this.state;
    if(isLoading) {
      console.log('isLoading');
      return <StyledSkeleton />
    }
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
  };

  componentDidMount = () => {
    this.setState({
      isLoading: false,
    });
    console.log('mounted');
  };

  render() {
    return this.getDisplay();
  }
}

export default App;