import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import {
  AboutMeContainer,
} from '@containers';
import ScrollAnimation from 'react-animate-on-scroll';

class AboutMe extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        {/* <ScrollAnimation duration={1.5} animateOnce animateIn="zoomIn"> */}
          {/* <ScrollAnimation animateIn="zoomIn"> */}
            <AboutMeContainer />
          {/* </ScrollAnimation> */}
        {/* </ScrollAnimation> */}
      </ThemeProvider>
    );
  }
}

export default AboutMe;
