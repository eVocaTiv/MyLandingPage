import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import AboutMeBGImage from '@components/Images/AboutMeBGImage';
import ScrollAnimation from 'react-animate-on-scroll';
import { NavBar } from '@components';
import '@styles/aboutMeStyles.css'
import '@styles/commonStyles.css';
import 'animate.css/animate.min.css';
import { StyledArrow } from '@styles/commonStyledComponents';
import { onProjectsClicked } from '@utils/commonUtils';
import ReactGA from 'react-ga';

const NavBarContainer = styled.div`
  width: 100%;
`;

const ArrowDiv = styled.div`
  position: absolute;
  left: 47%;
  top: 70%;
`;

const StyledAboutMeDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #000;
  overflow: auto;
`;

class AboutMeContainer extends Component {
  componentDidMount = () => {
    ReactGA.initialize('UA-162482291-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <Fragment>
        <NavBarContainer>
          <NavBar />
        </NavBarContainer>
        <StyledAboutMeDiv>
          <ScrollAnimation duration={1.5} animateIn="zoomIn">
            <AboutMeBGImage />
          </ScrollAnimation>
          <ArrowDiv className="arrow-div about-me-arrow-div anim-smooth">
            <ScrollAnimation delay={2500} animateIn="zoomIn">
              <StyledArrow onClick={onProjectsClicked} />
            </ScrollAnimation>
          </ArrowDiv>
        </StyledAboutMeDiv>
      </Fragment>
    );
  }
}

export default AboutMeContainer;
