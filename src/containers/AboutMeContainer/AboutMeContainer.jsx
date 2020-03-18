import React, { Component } from 'react';
import styled from 'styled-components';
import Constants from '@constants';
import AboutMeImage from '@components/Images/AboutMeImage';

const { aboutMeSection } = Constants.anchorIds;

const StyledAboutMeDiv = styled.div`
  width: 100%;
  height: 140vh;
  position: relative;
  z-index: 1;
  clip-path: polygon(0 25vh, 100% 0, 100% 100%, 0 100%);
`;

class AboutMeContainer extends Component {
  render() {
    return (
      <StyledAboutMeDiv id={aboutMeSection}>
        <AboutMeImage />
      </StyledAboutMeDiv>
    );
  }
}

export default AboutMeContainer;
