import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import { NewLandingContainer } from '@containers';

class LandingPage extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <NewLandingContainer />
      </ThemeProvider>
    );
  }
}

export default LandingPage;
