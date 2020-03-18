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
  left: 37.5%;
  top: 12.5%;
  font-size: 3rem;
`;

const StyledAboutMeDiv = styled.div`
  width: 100%;
  height: 140vh;
  position: relative;
  z-index: 1;
  background-color: #4C4659;
`;

const ProjectDisplayCardsDiv = styled.div`
  position: absolute;
  top: 20%;
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
          <ScrollAnimation animateOnce duration={0.5} animateIn="zoomIn">
            Coming Soon!..
          </ScrollAnimation>
        </StyledFooterText>
        <ProjectDisplayCardsDiv>
          <ScrollAnimation animateOnce duration={0.5} animateIn="fadeInLeft">
            <ProjectDisplayCard />
          </ScrollAnimation>

          <ScrollAnimation animateOnce duration={0.5} animateIn="fadeInRight">
            <ProjectDisplayCard />
          </ScrollAnimation>

          <ScrollAnimation animateOnce duration={0.5} animateIn="fadeInLeft">
            <ProjectDisplayCard />
          </ScrollAnimation>

          <ScrollAnimation animateOnce duration={0.5} animateIn="fadeInRight">
            <ProjectDisplayCard />
          </ScrollAnimation>

          <ScrollAnimation animateOnce duration={0.5} animateIn="fadeInLeft">
            <ProjectDisplayCard />
          </ScrollAnimation>

          <ScrollAnimation animateOnce duration={0.5} animateIn="fadeInRight">
            <ProjectDisplayCard />
          </ScrollAnimation>
        </ProjectDisplayCardsDiv>
      </StyledAboutMeDiv>
    );
  }
}

export default ProjectDisplayContainer;
