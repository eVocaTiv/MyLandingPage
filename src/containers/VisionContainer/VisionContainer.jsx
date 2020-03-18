import React, { Component } from 'react';
import VisionBGImage from '@components/Images/VisionBGImage';
import Constants from '@constants';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { StyledArrow } from '@styles/commonStyledComponents';
const { aboutMeSection } = Constants.anchorIds;

const StyledVisionBGImage = styled(VisionBGImage)`
  clip-path: polygon(0 25vh, 100% 0, 100% 75vh, 0 100%);
`;

const StyledVisionContainer = styled.div`
  height: 140vh;
  position: relative;
`;

const ArrowDiv = styled.div`
  position: absolute;
  left: 70%;
  top: 52%;
  height: 2rem;
    '& * svg': {
    font-size: 2rem;
  },
`;

class VisionContainer extends Component {
  render() {
    return (
      <StyledVisionContainer>
        <StyledVisionBGImage />
        <ArrowDiv className="arrow-div">
          <ScrollAnimation animateOnce animateIn="zoomIn">
            <StyledArrow onClick={() => scrollTo(`#${aboutMeSection}`)} />
          </ScrollAnimation>
        </ArrowDiv>
      </StyledVisionContainer>
    );
  }
}

export default VisionContainer;
