import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import {
  VisionContainer,
} from '@containers';
import ScrollAnimation from 'react-animate-on-scroll';

class Vision extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        {/* <ScrollAnimation animateIn="zoomIn"> */}
          <VisionContainer />
        {/* </ScrollAnimation> */}
      </ThemeProvider>
    );
  }
}

export default Vision;
