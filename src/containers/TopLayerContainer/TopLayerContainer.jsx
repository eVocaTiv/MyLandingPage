import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { NavBar, StyledSkeleton } from '@components';
import Constants from '@constants';
import LandingImage from '@components/Images/LandingImage';
import ScrollAnimation from 'react-animate-on-scroll';

const NavBarContainer= styled.div`
  width: 100%;
`;

const LandingViewContainer = styled.div`
  padding-top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: black;
`;

const StyledText = styled.div`
  position: absolute;
  font-family: 'Great Vibes';
  left: 50%;
  top: 50%;
  font-size: 4rem;
  color: #B7A9D9;
`;

const StyledSubText = styled.div`
  position: absolute;
  font-family: 'Julius Sans One';
  left: 55%;
  top: 70%;
  font-size: 1.15rem;
  color: #00C2CB;
`;

const { home } = Constants.anchorIds;

// TODO - optimize / compress video size.
class TopLayer extends Component {
  getTopLayer = () => {
    return (
      <Fragment>
        <NavBarContainer id={home}>
          <NavBar />
        </NavBarContainer>
        <LandingViewContainer>
          {/* <LandingImage />
          <StyledText>
            <ScrollAnimation
              animateOnce
              delay={3000}
              initiallyVisible={true}
              animateIn="flipOutY"
            >
              <ScrollAnimation
                animateOnce
                initiallyVisible={false}
                delay={1000}
                animateIn="flash"
              >
                Welcome! :)
              </ScrollAnimation>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce
              initiallyVisible={false}
              delay={4000}
              animateIn="fadeIn"
            >
              Glad you're here!
            </ScrollAnimation>
          </StyledText>
          <StyledSubText>
            <ScrollAnimation
              initiallyVisible={false}
              delay={4000}
              animateIn="fadeInRight"
              animateOnce
            >
              © 2020 Kunal Dewan
            </ScrollAnimation>
          </StyledSubText> */}
        </LandingViewContainer>
      </Fragment>
    );
  };

  render() {
    return this.getTopLayer();
  }
}
 
export default TopLayer;