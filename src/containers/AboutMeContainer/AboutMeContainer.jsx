import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import AboutMeBGImage from '@components/Images/AboutMeBGImage';
import ScrollAnimation from 'react-animate-on-scroll';
import { NavBar } from '@components';
import '@styles/commonStyles.css';
import 'animate.css/animate.min.css';

const NavBarContainer = styled.div`
  width: 100%;
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
        </StyledAboutMeDiv>
      </Fragment>
    );
  }
}

export default AboutMeContainer;
