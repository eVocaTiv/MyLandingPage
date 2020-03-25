import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Constants from '@constants';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { NavBar } from '@components';

const ProjectContainerDiv = styled.div`
  background-color: #407C80;
  width: 100vw;
  height: 100vh;
`;

const NavBarContainer = styled.div`
  width: 100%;
`;

export default class ProjectContainer extends Component {
  render() {
    return (
      <Fragment>
        <NavBarContainer>
          <NavBar />
        </NavBarContainer>
        <ProjectContainerDiv />
      </Fragment>
    );
  }
}
