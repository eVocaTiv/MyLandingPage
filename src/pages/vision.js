import React, { Component } from 'react';
import {
  VisionContainer,
} from '@containers';
import { checkForInvalidBrowser } from '@utils/commonUtils';

class Vision extends Component {
  componentDidMount = () => {
    checkForInvalidBrowser();
  };
  render() {
    return <VisionContainer />;
  }
}

export default Vision;
