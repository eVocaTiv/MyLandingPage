import React, { Component } from 'react';
import {
  AboutMeContainer,
} from '@containers';
import { checkForInvalidBrowser } from '@utils/commonUtils';

class AboutMe extends Component {
  componentDidMount = () => {
    checkForInvalidBrowser();
  };
  render() {
    return <AboutMeContainer />;
  }
}

export default AboutMe;
