import React, { Component } from 'react';
import NewLandingContainerBGImage from '@components/Images/NewLandingContainerBGImage';
import styled from 'styled-components';

const fullScreenDiv = styled.div`
  height: 100vh;
  overflow: hidden;
`;

class NewLandingContainer extends Component {
  render() {
    return (
      <NewLandingContainerBGImage />
    );
  }
}

export default NewLandingContainer;
