import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { NavBar, StyledSkeleton } from '@components';
import Constants from '@constants';
import LandingImage from '@components/Images/LandingImage';
import ScrollAnimation from 'react-animate-on-scroll';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { StyledArrow } from '@styles/commonStyledComponents';
const { home, visionSection } = Constants.anchorIds;

const NavBarContainer = styled.div`
  width: 100%;
`;

const LandingViewContainer = styled.div`
  padding-top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: black;
  position: relative;
`;

const StyledSubText = styled.div`
  position: absolute;
  font-family: 'Great Vibes';
  left: 55%;
  top: 30%;
  font-size: 3rem;
  color: #b7a9d9;
`;

const StyledText = styled.div`
  position: absolute;
  font-family: 'Great Vibes';
  left: 45%;
  top: 25%;
  font-size: 3.5rem;
  color: #b7a9d9;
`;

const ArrowDiv = styled.div`
  position: absolute;
  left: 62%;
  top: 45%;
`;

class TopLayer extends Component {
  getTopLayer = () => {
    return (
      <Fragment>
        <NavBarContainer id={home}>
          <NavBar />
        </NavBarContainer>
        <LandingViewContainer>
          <LandingImage />
          <StyledText>
            <ScrollAnimation
              animateOnce
              delay={3500}
              initiallyVisible={true}
              animateIn="fadeOut"
            >
              <ScrollAnimation
                animateOnce
                initiallyVisible={false}
                delay={2000}
                animateIn="fadeInUp"
              >
                "It's dangerous to go alone!"
              </ScrollAnimation>
            </ScrollAnimation>
          </StyledText>
          <StyledSubText>
            <ScrollAnimation
              animateOnce
              initiallyVisible={false}
              delay={4000}
              animateIn="fadeInUp"
            >
              "Take this."
            </ScrollAnimation>
          </StyledSubText>
          <ArrowDiv className="arrow-div">
            <ScrollAnimation animateOnce delay={5000} animateIn="zoomIn">
              <StyledArrow onClick={() => scrollTo(`#${visionSection}`)} />
            </ScrollAnimation>
          </ArrowDiv>
        </LandingViewContainer>
      </Fragment>
    );
  };

  render() {
    return this.getTopLayer();
  }
}

export default TopLayer;
