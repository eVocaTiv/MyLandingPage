import React, { Component } from 'react';
import {
  ProjectDisplayContainer,
} from '@containers';
import { checkForInvalidBrowser } from '@utils/commonUtils';

class Projects extends Component {
  componentDidMount = () => {
    checkForInvalidBrowser();
  };
  render() {
    return <ProjectDisplayContainer />;
  }
}

export default Projects;
