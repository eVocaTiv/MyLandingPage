import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { ProjectDisplayCard } from '@components';
import { StyledArrow } from '@styles/commonStyledComponents';
import { NavBar } from '@components';
import { onConnectClicked } from '@utils/commonUtils';
import IoTImage from '@components/Images/ProjectImages/IoTImage';
import JavaCodesImage from '@components/Images/ProjectImages/JavaCodesImage';
import LandingPageImage from '@components/Images/ProjectImages/LandingPageImage';
import OtherFiddlesImage from '@components/Images/ProjectImages/OtherFiddlesImage';
import UdemyImage from '@components/Images/ProjectImages/UdemyImage';
import ZentorsUIImage from '@components/Images/ProjectImages/ZentorsUIImage';
import AmazonImage from '@components/Images/ProjectImages/AmazonImage';
import BooksImage from '@components/Images/ProjectImages/BooksImage';

import Constants from '@constants';
import '@styles/commonStyles.css';

const NavBarContainer = styled.div`
  width: 100%;
`;

const StyledFooterText = styled.div`
  position: absolute;
  color: #00C2CB;
  font-family: 'Great Vibes';
  left: 37.5%;
  top: 10%;
  font-size: 2.5rem;
`;

const StyledProjectsDiv = styled.div`
  width: 100%;
  height: 250vh;
  position: relative;
  z-index: 1;
  background-color: black;
`;

const ProjectDisplayCardsDiv = styled.div`
  position: absolute;
  top: 20%;
  left: 12vw;
  display: grid;
  grid-template-columns: minmax(200px, 1fr) minmax(200px, 1fr);
  grid-column-gap: 6.5vw;
  grid-row-gap: 7.5vh;
`;

const ArrowDiv = styled.div`
  position: absolute;
  left: 47%;
  top: 87.5%;
`;

class ProjectDisplayContainer extends Component {
  render() {
    const {
      iotScanner,
      myWebsite,
      otherFiddles,
      udemy,
      zentors,
      amazon,
      books,
      javaCodes,
    } = Constants.projects;

    return (
      <Fragment>
        <NavBarContainer>
          <NavBar />
        </NavBarContainer>
        <ScrollAnimation duration={1.5} animateIn="zoomIn">
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

              <ScrollAnimation
                animateOnce
                duration={0.5}
                animateIn="fadeInLeftBig"
              >
                <ProjectDisplayCard
                  projectURL={zentors}
                  projectTitle="Zentors Website Redesign"
                >
                  <ZentorsUIImage />
                </ProjectDisplayCard>
              </ScrollAnimation>

              <ScrollAnimation
                animateOnce
                duration={0.5}
                animateIn="fadeInRightBig"
              >
                <ProjectDisplayCard
                  projectURL={amazon}
                  projectTitle="Amazon Work Ex."
                  isDisabled
                >
                  <AmazonImage />
                </ProjectDisplayCard>
              </ScrollAnimation>

              <ScrollAnimation
                animateOnce
                duration={0.5}
                animateIn="fadeInLeftBig"
              >
                <ProjectDisplayCard
                  projectURL={books}
                  projectTitle="Library Search App"
                  isDisabled
                >
                  <BooksImage />
                </ProjectDisplayCard>
              </ScrollAnimation>

              <ScrollAnimation
                animateOnce
                duration={0.5}
                animateIn="fadeInRightBig"
              >
                <ProjectDisplayCard
                  projectURL={javaCodes}
                  projectTitle="Java Code Catalog"
                >
                  <JavaCodesImage />
                </ProjectDisplayCard>
              </ScrollAnimation>
            </ProjectDisplayCardsDiv>
            <ArrowDiv className="arrow-div">
              <ScrollAnimation animateOnce animateIn="zoomIn">
                <StyledArrow onClick={onConnectClicked} />
              </ScrollAnimation>
            </ArrowDiv>
          </StyledProjectsDiv>
        </ScrollAnimation>
      </Fragment>
    );
  }
}

export default ProjectDisplayContainer;
