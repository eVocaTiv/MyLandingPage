import React, { Component } from 'react';
import VisionBGImage from '@components/Images/VisionBGImage';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { StyledArrow } from '@styles/commonStyledComponents';
import { NavBar } from '@components';
import { onAboutMeClicked } from '@utils/commonUtils';
import 'animate.css/animate.min.css';

const StyledVisionBGImage = styled(VisionBGImage)`
  clip-path: polygon(0 25vh, 100% 0, 100% 75vh, 0 100%);
`;

const StyledVisionContainer = styled.div`
  height: 100vh;
  position: relative;
  background: #000;
`;

const ArrowDiv = styled.div`
  position: absolute;
  left: 75%;
  top: 75%;
`;

const NavBarContainer = styled.div`
  width: 100%;
`;

class VisionContainer extends Component {
  render() {
    return (
      <ScrollAnimation  animateIn="zoomInUp">
      <StyledVisionContainer>
        <NavBarContainer>
          <NavBar />
        </NavBarContainer>
        <StyledVisionBGImage />
        <ArrowDiv className="arrow-div">
          <ScrollAnimation delay={1000}  animateIn="fadeIn">
            <StyledArrow onClick={onAboutMeClicked} />
          </ScrollAnimation>
        </ArrowDiv>
      </StyledVisionContainer>
      </ScrollAnimation>
    );
  }
}

export default VisionContainer;
