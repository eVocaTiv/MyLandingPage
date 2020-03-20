import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Constants from '@constants';
import AboutMeBGImage from '@components/Images/AboutMeBGImage';
import ScrollAnimation from 'react-animate-on-scroll';
import { StyledArrow } from '@styles/commonStyledComponents';
import { NavBar } from '@components';
import { onProjectsClicked } from '@utils/commonUtils';

const NavBarContainer = styled.div`
  width: 100%;
`;

const StyledAboutMeDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #000;
`;

const ArrowDiv = styled.div`
  position: absolute;
  left: 47.5%;
  top: 75%;
`;

class AboutMeContainer extends Component {
  render() {
    return (
      <Fragment>
        <NavBarContainer>
          <NavBar />
        </NavBarContainer>
        <StyledAboutMeDiv>
        <ScrollAnimation duration={1.5} animateIn="zoomIn">
          <AboutMeBGImage />
        </ScrollAnimation>
          <ArrowDiv className="arrow-div">
            <ScrollAnimation delay={1500}  animateIn="zoomIn">
              <StyledArrow onClick={onProjectsClicked} />
            </ScrollAnimation>
          </ArrowDiv>
        </StyledAboutMeDiv>
      </Fragment>
    );
  }
}

export default AboutMeContainer;
