import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import Model from '@components/3DModel/Model.js';
import { NavBar } from '@components';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  width: 100%;
`;

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

class LandingPage extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <NavBarContainer>
          <NavBar />
        </NavBarContainer>
        <Model />
        <ModelCreditsDiv>
          <a
            target="_blank"
            href="https://sketchfab.com/3d-models/elven-ranger-statue-71aec2d9f7724ae09992435ce8ff7258"
          >
            Model credits: Eon
          </a>
        </ModelCreditsDiv>
      </ThemeProvider>
    );
  }
}

export default LandingPage;
