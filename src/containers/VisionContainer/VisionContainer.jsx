import React, { Component } from 'react';
import VisionBGImage from '@components/Images/VisionBGImage';
import styled from 'styled-components';

const StyledVisionBGImage = styled(VisionBGImage)`
  clip-path: polygon(0 25vh, 100% 0, 100% 75vh, 0 100%);
`;

const StyledVisionContainer = styled.div`
  height: 100vh;
`;

// use clip design in footer
// clip-path: polygon(0 0, 100% 0, 0 100%, 75vh 100%);
class VisionContainer extends Component {
  render() {
    return (
      <StyledVisionContainer>
        <StyledVisionBGImage />
      </StyledVisionContainer>
    );
  }
}

export default VisionContainer;
