import React, { Component } from 'react';
import VisionBGImage from '@components/Images/VisionBGImage';
import Constants from '@constants';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { StyledArrow, StyledLink } from '@styles/commonStyledComponents';
import { NavBar } from '@components';

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
  top: 48%;
`;

const NavBarContainer = styled.div`
  width: 100%;
`;

class VisionContainer extends Component {
  render() {
    return (
      <StyledVisionContainer>
        <NavBarContainer>
          <NavBar />
        </NavBarContainer>
        <StyledVisionBGImage />
        <ArrowDiv className="arrow-div">
          <ScrollAnimation delay={1000} animateOnce animateIn="fadeIn">
            <StyledLink to="/">
              <StyledArrow />
            </StyledLink>
          </ScrollAnimation>
        </ArrowDiv>
      </StyledVisionContainer>
    );
  }
}

export default VisionContainer;
