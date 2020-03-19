import React, { Component } from 'react';
import styled from 'styled-components';
import Constants from '@constants';
import AboutMeImage from '@components/Images/AboutMeImage';
import ScrollAnimation from 'react-animate-on-scroll';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { StyledArrow } from '@styles/commonStyledComponents';
const { aboutMeSection, projectDisplay } = Constants.anchorIds;

const StyledAboutMeDiv = styled.div`
  width: 100%;
  height: 140vh;
  position: relative;
  z-index: 1;
`;

const ArrowDiv = styled.div`
  position: absolute;
  left: 45%;
  bottom: 40%;
`;

class AboutMeContainer extends Component {
  render() {
    return (
      <StyledAboutMeDiv id={aboutMeSection}>
        <AboutMeImage />
        <ArrowDiv className="arrow-div">
          <ScrollAnimation animateOnce animateIn="zoomIn">
            <StyledArrow onClick={() => scrollTo(`#${projectDisplay}`)} />
          </ScrollAnimation>
        </ArrowDiv>
      </StyledAboutMeDiv>
    );
  }
}

export default AboutMeContainer;
