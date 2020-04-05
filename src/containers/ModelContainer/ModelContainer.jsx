import React, { Component } from 'react'
import Model from '@components/3DModel/Model.js';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

const ModelCreditsDiv = styled.div`
  position: absolute;
  right: 7%;
  bottom: 5%;
  & > a {
    font-size: 0.4rem;
    text-decoration: none;
    font-family: 'Julius Sans One';
    color: white;
  }
`;

const TopLayerContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

class ModelContainer extends Component {
  render() {
    return (
      <TopLayerContainer>
        <ScrollAnimation
          delay={1000}
          duration={3}
          animateOnce
          animateIn="fadeIn"
        >
          <Model />
          <ModelCreditsDiv>
            <a
              target="_blank"
              href="https://sketchfab.com/3d-models/elven-ranger-statue-71aec2d9f7724ae09992435ce8ff7258"
            >
              Model credits: Eon
            </a>
          </ModelCreditsDiv>
        </ScrollAnimation>
      </TopLayerContainer>
    );
  }
}

export default ModelContainer;