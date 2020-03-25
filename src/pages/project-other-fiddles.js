import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import '@styles/commonStyles.css';
import { ProjectContainer } from '@containers';

class Project extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
           <ProjectContainer />
      </ThemeProvider>
    );
  }
}

export default Project;
