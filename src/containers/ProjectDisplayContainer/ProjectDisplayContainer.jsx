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
import CollageImage from '@components/Images/ProjectImages/CollageImage';
import BlogImage from '@components/Images/ProjectImages/BlogImage';

import Constants from '@constants';
import '@styles/projectsStyles.css';
import '@styles/commonStyles.css';

const NavBarContainer = styled.div`
  width: 100%;
`;

const StyledFooterText = styled.div`
  position: absolute;
  color: #00c2cb;
  font-family: 'Great Vibes';
  left: 37.5%;
  top: 10%;
  font-size: 2.5rem;
  text-align: center;
`;

const StyledProjectsDiv = styled.div`
  width: 100%;
  height: 325vh;
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

const ArrowDivPrimary = styled.div`
  position: absolute;
  left: 47%;
  top: 88.5%;
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
          <StyledProjectsDiv className="projects-container">
            <StyledFooterText className="projects-heading anim-smooth">
              <ScrollAnimation duration={1.5} animateIn="rotateIn">
                Some of my work! <br />
              </ScrollAnimation>
              <div className="projects-down-arrow">&dArr;</div>
            </StyledFooterText>
            <ProjectDisplayCardsDiv className="projects-display-cards-div">
              <ScrollAnimation duration={0.5} animateIn="zoomIn">
                <ProjectDisplayCard
                  projectURL={iotScanner}
                  projectTitle="IoT Vulnerability Scanner"
                >
                  <IoTImage />
                </ProjectDisplayCard>
              </ScrollAnimation>

              <ScrollAnimation duration={0.5} animateIn="zoomIn">
                <ProjectDisplayCard
                  projectURL={udemy}
                  projectTitle="Udemy courses' projects"
                >
                  <UdemyImage />
                </ProjectDisplayCard>
              </ScrollAnimation>

              <ScrollAnimation duration={0.5} animateIn="zoomIn">
                <ProjectDisplayCard
                  projectURL={myWebsite}
                  projectTitle="My website"
                >
                  <LandingPageImage />
                </ProjectDisplayCard>
              </ScrollAnimation>

              <ScrollAnimation duration={0.5} animateIn="zoomIn">
                <ProjectDisplayCard
                  projectURL={otherFiddles}
                  projectTitle="UI Fiddles"
                >
                  <OtherFiddlesImage />
                </ProjectDisplayCard>
              </ScrollAnimation>

              <ScrollAnimation duration={0.5} animateIn="zoomIn">
                <ProjectDisplayCard
                  projectURL={zentors}
                  projectTitle="Zentors Website Redesign"
                >
                  <ZentorsUIImage />
                </ProjectDisplayCard>
              </ScrollAnimation>

              <ScrollAnimation duration={0.5} animateIn="zoomIn">
                <ProjectDisplayCard
                  projectURL={amazon}
                  projectTitle="Amazon Work Ex."
                >
                  <AmazonImage />
                </ProjectDisplayCard>
              </ScrollAnimation>

              <ScrollAnimation duration={0.5} animateIn="zoomIn">
                <ProjectDisplayCard
                  projectURL={books}
                  projectTitle="Book Search App"
                >
                  <BooksImage />
                </ProjectDisplayCard>
              </ScrollAnimation>

              <ScrollAnimation duration={0.5} animateIn="zoomIn">
                <ProjectDisplayCard
                  projectURL={javaCodes}
                  projectTitle="Code Catalog"
                >
                  <JavaCodesImage />
                </ProjectDisplayCard>
              </ScrollAnimation>

              {/* BPGC Collage */}
              <ScrollAnimation duration={0.5} animateIn="zoomIn">
                <ProjectDisplayCard
                  // projectURL={javaCodes}
                  projectTitle={`A Collage Website ( Coming Soon! )`}
                  isDisabled
                >
                  <CollageImage />
                </ProjectDisplayCard>
              </ScrollAnimation>

              {/* Medium blog */}
              <ScrollAnimation duration={0.5} animateIn="zoomIn">
                <ProjectDisplayCard
                  // projectURL={javaCodes}
                  projectTitle="My Blog  ( Coming Soon! )"
                  isDisabled
                >
                  <BlogImage />
                </ProjectDisplayCard>
              </ScrollAnimation>
            </ProjectDisplayCardsDiv>
            <ArrowDivPrimary className="arrow-div projects-arrow-primary anim-smooth">
              <ScrollAnimation animateIn="zoomIn">
                <StyledArrow onClick={onConnectClicked} />
              </ScrollAnimation>
            </ArrowDivPrimary>
          </StyledProjectsDiv>
        </ScrollAnimation>
      </Fragment>
    );
  }
}

export default ProjectDisplayContainer;
