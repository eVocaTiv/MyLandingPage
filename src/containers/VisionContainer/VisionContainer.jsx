import React, { Component } from 'react';
import VisionBGImage from '@components/Images/VisionBGImage';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { StyledArrow } from '@styles/commonStyledComponents';
import { NavBar } from '@components';
import { onAboutMeClicked } from '@utils/commonUtils';
import '@styles/cardStyles.css';
import '@styles/visionStyles.css';
import '@styles/commonStyles.css';
import 'animate.css/animate.min.css';
import ReactGA from 'react-ga';

const StyledVisionBGImage = styled(VisionBGImage)`
  clip-path: polygon(0 25vh, 100% 0, 100% 75vh, 0 100%);
`;

const StyledVisionContainer = styled.div`
  height: 100vh;
  position: relative;
  background: #000;
`;

const ArrowDiv = styled.div`
  position: absolute;
  left: 75%;
  top: 75%;
`;

const NavBarContainer = styled.div`
  width: 100%;
`;

class VisionContainer extends Component {
  componentDidMount = () => {
    ReactGA.initialize('UA-162482291-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <ScrollAnimation  duration={3} animateIn="fadeIn">
      <StyledVisionContainer>
        <NavBarContainer>
          <NavBar />
        </NavBarContainer>
        <StyledVisionBGImage />
        <ArrowDiv className="arrow-div vision-arrow-div anim-smooth">
          <ScrollAnimation delay={3500} animateIn="fadeIn">
            <StyledArrow onClick={onAboutMeClicked} />
          </ScrollAnimation>
        </ArrowDiv>
      </StyledVisionContainer>
      </ScrollAnimation>
    );
  }
}

export default VisionContainer;
