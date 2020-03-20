import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Constants from '@constants';
import AboutMeBGImage from '@components/Images/AboutMeBGImage';
import ScrollAnimation from 'react-animate-on-scroll';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { StyledArrow } from '@styles/commonStyledComponents';
const { aboutMeSection, projectDisplay } = Constants.anchorIds;
import { NavBar } from '@components';

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
  left: 45%;
  top: 55%;
`;

class AboutMeContainer extends Component {
  render() {
    return (
      <Fragment>
        <NavBarContainer>
          <NavBar />
        </NavBarContainer>
        <StyledAboutMeDiv id={aboutMeSection}>
          <AboutMeBGImage />
          <ArrowDiv className="arrow-div">
            <ScrollAnimation animateOnce animateIn="zoomIn">
              <StyledArrow onClick={() => scrollTo(`#${projectDisplay}`)} />
            </ScrollAnimation>
          </ArrowDiv>
        </StyledAboutMeDiv>
      </Fragment>
    );
  }
}

export default AboutMeContainer;
