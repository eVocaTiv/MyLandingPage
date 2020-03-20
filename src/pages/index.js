import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import {
   TopLayerContainer,
} from '@containers';

class LandingPage extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
          <TopLayerContainer />
      </ThemeProvider>
    );
  }
}

export default LandingPage;
