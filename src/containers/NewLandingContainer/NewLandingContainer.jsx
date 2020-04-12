import React, { Component } from 'react';
import NewLandingContainerBGImage from '@components/Images/NewLandingContainerBGImage';
import '@styles/commonStyles.css';
import '@styles/newLandingStyles.css';
import 'animate.css/animate.min.css';
import { checkForInvalidBrowser } from '@utils/commonUtils';

class NewLandingContainer extends Component {
  componentDidMount = () => {
    checkForInvalidBrowser();
  };

  render() {
    return <NewLandingContainerBGImage />;
  }
}

export default NewLandingContainer;
