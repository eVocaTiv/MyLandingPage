import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import {
  AboutMeContainer,
} from '@containers';

class AboutMe extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
            <AboutMeContainer />
      </ThemeProvider>
    );
  }
}

export default AboutMe;
