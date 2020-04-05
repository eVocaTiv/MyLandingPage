import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import {
  VisionContainer,
} from '@containers';
import '@styles/cardStyles.css';
import '@styles/commonStyles.css';
import 'animate.css/animate.min.css';

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
