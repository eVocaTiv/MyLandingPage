import React, { Component } from 'react';
import VisionBGImage from '@components/Images/VisionBGImage';
import styled from 'styled-components';

const StyledVisionBGImage = styled(VisionBGImage)`
  clip-path: polygon(0 0, 100% 0px, 100% 60%, 50% 100%, 0px 60%, 50% 0, 0 50%);
`;

class VisionContainer extends Component {
  render() {
    return <StyledVisionBGImage />;
  }
}

export default VisionContainer;
