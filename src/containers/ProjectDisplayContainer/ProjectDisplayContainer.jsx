import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Constants from '@constants';
import ScrollAnimation from 'react-animate-on-scroll';
import { ProjectDisplayCard } from '@components';
import 'animate.css/animate.min.css';
import { StyledArrow } from '@styles/commonStyledComponents';
import { NavBar } from '@components';
import { onConnectClicked } from '@utils/commonUtils';
import IoTImage from '@components/Images/ProjectImages/IoTImage';
import VentureUIImage from '@components/Images/ProjectImages/VentureUIImage';
import LandingPageImage from '@components/Images/ProjectImages/LandingPageImage';
import OtherFiddlesImage from '@components/Images/ProjectImages/OtherFiddlesImage';
import UdemyImage from '@components/Images/ProjectImages/UdemyImage';
import ZentorsUIImage from '@components/Images/ProjectImages/ZentorsUIImage';

const NavBarContainer = styled.div`
  width: 100%;
`;

const StyledFooterText = styled.div`
  position: absolute;
  color: #00C2CB;
  font-family: 'Great Vibes';
  left: 37.5%;
  top: 12.5%;
  font-size: 2.5rem;
`;

const StyledProjectsDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #4c4659;
`;

const ProjectDisplayCardsDiv = styled.div`
  position: absolute;
  top: 25%;
  left: 12vw;
  display: grid;
  grid-template-columns: minmax(200px, 1fr) minmax(200px, 1fr);
  grid-column-gap: 6.5vw;
  grid-row-gap: 7.5vh;
`;

const ArrowDiv = styled.div`
  position: absolute;
  left: 47%;
  top: 77.5%;
`;

class ProjectDisplayContainer extends Component {
  render() {
    const {
      iotScanner,
      myWebsite,
      otherFiddles,
      udemy,
      ventureUI,
      zentors,
    } = Constants.projects;

    return (
      <Fragment>
        <NavBarContainer>
          <NavBar />
        </NavBarContainer>
        <StyledProjectsDiv>
          <StyledFooterText>
            <ScrollAnimation
              animateOnce
              delay={250}
              duration={0.5}
              animateIn="rotateIn"
            >
              Some of my work!
            </ScrollAnimation>
          </StyledFooterText>
          <ProjectDisplayCardsDiv>
            <ScrollAnimation
              animateOnce
              delay={600}
              duration={0.5}
              animateIn="fadeInLeftBig"
            >
              <ProjectDisplayCard
                projectURL={iotScanner}
                projectTitle="IoT Vulnerability Scanner"
              >
                <IoTImage />
              </ProjectDisplayCard>
            </ScrollAnimation>

            <ScrollAnimation
              animateOnce
              delay={650}
              duration={0.5}
              animateIn="fadeInRightBig"
            >
              <ProjectDisplayCard
                projectURL={udemy}
                projectTitle="Udemy courses' projects"
              >
                <UdemyImage />
              </ProjectDisplayCard>
            </ScrollAnimation>

            <ScrollAnimation
              animateOnce
              delay={700}
              duration={0.5}
              animateIn="fadeInLeftBig"
            >
              <ProjectDisplayCard
                projectURL={myWebsite}
                projectTitle="My website"
              >
                <LandingPageImage />
              </ProjectDisplayCard>
            </ScrollAnimation>

            <ScrollAnimation
              animateOnce
              delay={750}
              duration={0.5}
              animateIn="fadeInRightBig"
            >
              <ProjectDisplayCard
                projectURL={otherFiddles}
                projectTitle="UI Fiddles"
              >
                <OtherFiddlesImage />
              </ProjectDisplayCard>
            </ScrollAnimation>

            {/* <ScrollAnimation
              animateOnce
              delay={500}
              duration={0.5}
              animateIn="fadeInLeftBig"
            >
              <ProjectDisplayCard
                projectURL={ventureUI}
                projectTitle="Coming soon!"
                // projectTitle="Other UI Fiddles"
                isDisabled
              >
                <OtherFiddlesImage />
              </ProjectDisplayCard>
            </ScrollAnimation>

            <ScrollAnimation
              animateOnce
              delay={550}
              duration={0.5}
              animateIn="fadeInRightBig"
            >
              <ProjectDisplayCard
                projectURL={otherFiddles}
                projectTitle="Other UI fiddles"
                isDisabled
              >
                <OtherFiddlesImage />
              </ProjectDisplayCard>
            </ScrollAnimation> */}
          </ProjectDisplayCardsDiv>
          <ArrowDiv className="arrow-div">
            <ScrollAnimation delay={600} animateOnce animateIn="zoomIn">
              <StyledArrow onClick={onConnectClicked} />
            </ScrollAnimation>
          </ArrowDiv>
        </StyledProjectsDiv>
      </Fragment>
    );
  }
}

export default ProjectDisplayContainer;
