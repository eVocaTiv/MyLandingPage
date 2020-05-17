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
import BPGCImage from '@components/Images/ProjectImages/BPGCImage';
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
  top: 7.5%;
  font-size: 2.5rem;
  text-align: center;
`;

const StyledProjectsDiv = styled.div`
  width: 100%;
  height: 375vh;
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
  grid-row-gap: 20vh;
`;

const ArrowDivPrimary = styled.div`
  position: absolute;
  left: 47%;
  top: 88.5%;
`;

const Overlay = styled.div`
  position: absolute;
  transition: all 0.5s ease;
  height: 100%;
  width: 100%;
  color: #00c2cb;
  top: 0;
  letter-spacing: -0.1rem;
  font-style: italic;
  font-family: Montserrat;
  display: block;
  text-align: center;
  background: rgba(0, 194, 203, 0.8);
  font-weight: 900;

  .overlay-text--heading {
    font-size: 1.25rem;
    position: relative;
    top: 40%;
    color: black;
  }

  .overlay-text--role {
    display: none;
    font-size: 0.65rem;
  }
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
      bpgcCollage,
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
                <ProjectDisplayCard projectURL={iotScanner}>
                  <IoTImage />
                  <Overlay className="project-card-overlay">
                    <div className="overlay-text--heading">
                      IoT Security Web App
                    </div>
                    <div className="overlay-text--role">
                      UI Development and Prototyping
                    </div>
                  </Overlay>
                </ProjectDisplayCard>
              </ScrollAnimation>

              {/* BPGC CollageCollage */}
              <ScrollAnimation duration={0.5} animateIn="zoomIn">
                <ProjectDisplayCard projectURL={bpgcCollage}>
                  <BPGCImage />
                  <Overlay className="project-card-overlay">
                    <div className="overlay-text--heading">
                      A Pictorial Website on BITS
                    </div>
                    <div className="overlay-text--role">
                      Software Development and UI Design
                    </div>
                  </Overlay>
                </ProjectDisplayCard>
              </ScrollAnimation>

              <ScrollAnimation duration={0.5} animateIn="zoomIn">
                <ProjectDisplayCard projectURL={udemy}>
                  <UdemyImage />
                  <Overlay className="project-card-overlay">
                    <div className="overlay-text--heading">Udemy Learnings</div>
                    <div className="overlay-text--role">
                      UI Development &amp; Design
                    </div>
                  </Overlay>
                </ProjectDisplayCard>
              </ScrollAnimation>

              <ScrollAnimation duration={0.5} animateIn="zoomIn">
                <ProjectDisplayCard projectURL={myWebsite}>
                  <LandingPageImage />
                  <Overlay className="project-card-overlay">
                    <div className="overlay-text--heading">
                      Personal Website
                    </div>
                    <div className="overlay-text--role">
                      Software Development and UI Design
                    </div>
                  </Overlay>
                </ProjectDisplayCard>
              </ScrollAnimation>

              <ScrollAnimation duration={0.5} animateIn="zoomIn">
                <ProjectDisplayCard projectURL={otherFiddles}>
                  <OtherFiddlesImage />
                  <Overlay className="project-card-overlay">
                    <div className="overlay-text--heading">Misc. Effects </div>
                    <div className="overlay-text--role">
                      Logo &amp; VFX Design and CSS custom effects.
                    </div>
                  </Overlay>
                </ProjectDisplayCard>
              </ScrollAnimation>

              <ScrollAnimation duration={0.5} animateIn="zoomIn">
                <ProjectDisplayCard projectURL={zentors}>
                  <ZentorsUIImage />
                  <Overlay className="project-card-overlay">
                    <div className="overlay-text--heading">
                      Zentors Website Redesign
                    </div>
                    <div className="overlay-text--role">
                      UX Research &amp; Design, Software Design &amp;
                      Development
                    </div>
                  </Overlay>
                </ProjectDisplayCard>
              </ScrollAnimation>

              <ScrollAnimation duration={0.5} animateIn="zoomIn">
                <ProjectDisplayCard projectURL={amazon}>
                  <AmazonImage />
                  <Overlay className="project-card-overlay">
                    <div className="overlay-text--heading">
                      Amazon Work Experience
                    </div>
                    <div className="overlay-text--role">
                      Software Development and Front-End Engineering
                    </div>
                  </Overlay>
                </ProjectDisplayCard>
              </ScrollAnimation>

              <ScrollAnimation duration={0.5} animateIn="zoomIn">
                <ProjectDisplayCard projectURL={books}>
                  <BooksImage />
                  <Overlay className="project-card-overlay">
                    <div className="overlay-text--heading">Book Search App</div>
                    <div className="overlay-text--role">
                      Software Development and UI Design
                    </div>
                  </Overlay>
                </ProjectDisplayCard>
              </ScrollAnimation>

              <ScrollAnimation duration={0.5} animateIn="zoomIn">
                <ProjectDisplayCard projectURL={javaCodes}>
                  <JavaCodesImage />
                  <Overlay className="project-card-overlay">
                    <div className="overlay-text--heading">Code Catalog</div>
                    <div className="overlay-text--role">
                      Programming and Tutoring
                    </div>
                  </Overlay>
                </ProjectDisplayCard>
              </ScrollAnimation>

              {/* Medium blog */}
              <ScrollAnimation duration={0.5} animateIn="zoomIn">
                <ProjectDisplayCard
                  isDisabled
                >
                  <BlogImage />
                  <Overlay className="project-card-overlay">
                    <div className="overlay-text--heading">
                      UX Blog ( Coming Soon! )
                    </div>
                    <div className="overlay-text--role"> Blog Writing </div>
                  </Overlay>
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
