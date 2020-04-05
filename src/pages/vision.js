import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import {
  VisionContainer,
} from '@containers';

class Vision extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
          <VisionContainer />
      </ThemeProvider>
    );
  }
}

export default Vision;
