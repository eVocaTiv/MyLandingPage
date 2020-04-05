import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import {
  ProjectDisplayContainer,
} from '@containers';

class Projects extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
          <ProjectDisplayContainer />
      </ThemeProvider>
    );
  }
}

export default Projects;
