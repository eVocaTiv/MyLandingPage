import React, { Component } from 'react';
import styled from 'styled-components';
import Constants from '@constants';
import ScrollAnimation from 'react-animate-on-scroll';
const { projectDisplay } = Constants.anchorIds;
import { ProjectDisplayCard } from '@components';
import "animate.css/animate.min.css";

const StyledFooterText = styled.div`
  position: absolute;
  color: #CC70AB;
  font-family: 'Great Vibes';
  left: 32.5%;
  top: 20%;
  font-size: 4rem;
`;

const StyledAboutMeDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #4C4659;
`;

const ProjectDisplayCardsDiv = styled.div`
  position: absolute;
  top: 30%;
  left: 40%;
  display: grid;
  grid-template-columns: minmax(100px, 1fr)  minmax(100px, 1fr) ;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

class ProjectDisplayContainer extends Component {

  render() {
    return (
      <StyledAboutMeDiv id={projectDisplay}>
        <StyledFooterText>
          <ScrollAnimation animateIn="zoomIn">Coming Soon!.. </ScrollAnimation>
        </StyledFooterText>
        <ProjectDisplayCardsDiv>
          <ScrollAnimation delay={500} animateIn="fadeInLeft">
            <ProjectDisplayCard />
          </ScrollAnimation>

          <ScrollAnimation delay={500} animateIn="fadeInRight">
            <ProjectDisplayCard />
          </ScrollAnimation>

          <ScrollAnimation delay={600} animateIn="fadeInLeft">
            <ProjectDisplayCard />
          </ScrollAnimation>

          <ScrollAnimation delay={600} animateIn="fadeInRight">
            <ProjectDisplayCard />
          </ScrollAnimation>

          <ScrollAnimation delay={700} animateIn="fadeInLeft">
            <ProjectDisplayCard />
          </ScrollAnimation>

          <ScrollAnimation delay={700} animateIn="fadeInRight">
            <ProjectDisplayCard />
          </ScrollAnimation>
        </ProjectDisplayCardsDiv>
      </StyledAboutMeDiv>
    );
  }
}

export default ProjectDisplayContainer;
