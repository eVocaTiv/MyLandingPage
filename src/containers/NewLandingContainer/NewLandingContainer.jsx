import React, { Component } from 'react';
import NewLandingContainerBGImage from '@components/Images/NewLandingContainerBGImage';
import styled from 'styled-components';
import '@styles/commonStyles.css';
import '@styles/newLandingStyles.css';
import 'animate.css/animate.min.css';

class NewLandingContainer extends Component {
  render() {
    return (
        <NewLandingContainerBGImage />
    );
  }
}

export default NewLandingContainer;
