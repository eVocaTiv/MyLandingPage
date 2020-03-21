import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import TopLayerImage from '@components/Images/TopLayerImage';
import ZeldaSwordImage from '@components/Images/ZeldaSwordImage';
import ScrollAnimation from 'react-animate-on-scroll';
import { StyledArrow } from '@styles/commonStyledComponents';
import { NavBar } from '@components';
import { onVisionClicked } from '@utils/commonUtils';
// import '@styles/commonStyles.css';

const NavBarContainer = styled.div`
  width: 100%;
`;

const LandingViewContainer = styled.div`
  position: relative;
  padding-top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: black;
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
  left: 80%;
  top: 45%;
`;

const ZeldaSwordImageContainer = styled.div`
  height: 50%;
  width: 20%;
  position: absolute;
  top: 25%;
  left: 65%;
`;

class TopLayer extends Component {


  // vanish effect for zelda sword image.
  vanishSword =  () => {
    let swordImage = document.getElementById('zelda-sword-image-container');
    swordImage.style.color = "#fff";
    swordImage.style.fontSize = "1.5rem";
    swordImage.style.top = "50%";
    swordImage.style.left = "57.5%";
    swordImage.style.fontFamily = "Great Vibes";
    swordImage.style.lineHeight= "2rem";
    
    swordImage.innerHTML = "Item picked up: <br> Sword of Time!";
  }

  getTopLayer = () => {
    return (
      <Fragment>
        <NavBarContainer>
          <NavBar />
        </NavBarContainer>
        <LandingViewContainer>
          <TopLayerImage />
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
                delay={1500}
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

            <ZeldaSwordImageContainer
              onClick={this.vanishSword}
              id="zelda-sword-image-container"
              className="zelda-sword-image-container"
            >
              <ScrollAnimation animateOnce delay={5000} animateIn="zoomIn">
                <ZeldaSwordImage />
              </ScrollAnimation>
            </ZeldaSwordImageContainer>

          <ArrowDiv className="arrow-div">
            <ScrollAnimation animateOnce delay={6000} animateIn="zoomIn">
              <StyledArrow onClick={onVisionClicked} />
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
