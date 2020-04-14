import React, { Component } from 'react';
import { NewLandingContainer } from '@containers';
import { checkForInvalidBrowser } from '@utils/commonUtils';

class LandingPage extends Component {
  componentDidMount = () => {
    checkForInvalidBrowser();
  };
  render() {
    return <NewLandingContainer />;
  }
}

export default LandingPage;
