import React, { Component } from 'react';
import styled from 'styled-components';
import Constants from '@constants';
import ScrollAnimation from 'react-animate-on-scroll';
const { projectDisplay } = Constants.anchorIds;
import "animate.css/animate.min.css";

const StyledFooterText = styled.div`
  position: absolute;
  color: #CC70AB;
  font-family: 'Great Vibes';
  left: 32.5%;
  top: 50%;
  font-size: 4rem;
`;

const StyledAboutMeDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #4C4659;
`;

class ProjectDisplayContainer extends Component {

  render() {
    return (
      <StyledAboutMeDiv id={projectDisplay}>
        <StyledFooterText>
          <ScrollAnimation animateIn="zoomIn">Coming Soon!.. </ScrollAnimation>
        </StyledFooterText>
      </StyledAboutMeDiv>
    );
  }
}

export default ProjectDisplayContainer;
