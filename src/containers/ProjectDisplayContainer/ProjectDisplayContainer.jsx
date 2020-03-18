import React, { Component } from 'react';
import styled from 'styled-components';
import Constants from '@constants';
import ScrollAnimation from 'react-animate-on-scroll';
const { projectDisplay } = Constants.anchorIds;
import { ProjectDisplayCard } from '@components';
import 'animate.css/animate.min.css';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { StyledArrow } from '@styles/commonStyledComponents';
const { footer } = Constants.anchorIds;

const StyledFooterText = styled.div`
  position: absolute;
  color: #cc70ab;
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
  background-color: #4c4659;
`;

const ProjectDisplayCardsDiv = styled.div`
  position: absolute;
  top: 20%;
  left: 10vw;
  display: grid;
  grid-template-columns: minmax(200px, 1fr) minmax(200px, 1fr) ;
  grid-column-gap: 5vw;
  grid-row-gap: 5vh;
`;

const ArrowDiv = styled.div`
  position: absolute;
  left: 44.5%;
  top: 55%;
  height: 2rem;
    '& * svg': {
    font-size: 2rem;
  },
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
          <ScrollAnimation animateOnce duration={0.5} animateIn="fadeInUp">
            <ProjectDisplayCard />
          </ScrollAnimation>

          <ScrollAnimation animateOnce duration={0.5} animateIn="fadeInUp">
            <ProjectDisplayCard />
          </ScrollAnimation>

          <ScrollAnimation animateOnce duration={0.5} animateIn="fadeInUp">
            <ProjectDisplayCard />
          </ScrollAnimation>

          <ScrollAnimation animateOnce duration={0.5} animateIn="fadeInUp">
            <ProjectDisplayCard />
          </ScrollAnimation>

          <ScrollAnimation animateOnce duration={0.5} animateIn="fadeInUp">
            <ProjectDisplayCard />
          </ScrollAnimation>

          <ScrollAnimation animateOnce duration={0.5} animateIn="fadeInUp">
            <ProjectDisplayCard />
          </ScrollAnimation>
        </ProjectDisplayCardsDiv>
        <ArrowDiv className="arrow-div">
          <ScrollAnimation animateOnce animateIn="zoomIn">
            <StyledArrow onClick={() => scrollTo(`#${footer}`)} />
          </ScrollAnimation>
        </ArrowDiv>
      </StyledAboutMeDiv>
    );
  }
}

export default ProjectDisplayContainer;
