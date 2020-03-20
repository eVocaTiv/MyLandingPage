import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import {
  ProjectDisplayContainer,
} from '@containers';
import ScrollAnimation from 'react-animate-on-scroll';

class Projects extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        {/* <ScrollAnimation animateIn="zoomIn"> */}
          <ProjectDisplayContainer />
        {/* </ScrollAnimation> */}
      </ThemeProvider>
    );
  }
}

export default Projects;
