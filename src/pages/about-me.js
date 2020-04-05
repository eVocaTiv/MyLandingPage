import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import {
  AboutMeContainer,
} from '@containers';
import '@styles/commonStyles.css';
import 'animate.css/animate.min.css';

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
