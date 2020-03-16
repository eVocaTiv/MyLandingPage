import React, { Component } from 'react';
import styled from 'styled-components';
import Constants from '@constants';

const { projectDisplay } = Constants.anchorIds;

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
        <StyledFooterText>Coming Soon!..</StyledFooterText>
      </StyledAboutMeDiv>
    );
  }
}

export default ProjectDisplayContainer;
