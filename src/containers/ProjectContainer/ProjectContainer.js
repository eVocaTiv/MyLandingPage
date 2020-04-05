import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { NavBar } from '@components';
import Card from '@material-ui/core/Card';
import ScrollAnimation from 'react-animate-on-scroll';

const ProjectContainerDiv = styled.div`
  background-color: #407c80;
`;

const NavBarContainer = styled.div`
  width: 100%;
`;

const StyledProjectDescriptionDiv = styled.div`
  height: 100vh;
  position: relative;
`;

const StyledPaper = styled(Card)`
  // override default transition in card's child.
  cursor: pointer;
  min-width: 200px !important;
  width: 60% !important;
  height: 80%;
  padding: 0.5rem;
  background-color: transparent !important;
  position: absolute;
  left: 20%;
  top: ${(props) =>
    props.isMoreSpaced === 'xLarge'
      ? '35%'
      : props.isMoreSpaced === 'large'
      ? '25%'
      : props.isMoreSpaced === 'medium'
      ? '15%'
      : '10%'};
  line-height: 3rem;
  font-size: 1.75rem;
  letter-spacing: 0.1rem;
  box-shadow: none !important;
  pointer-events: none;
  font-family: 'Allan';
`;

const ProjectFooterDiv = styled.div`
  height: 100vh;
  color: black;
`;

export default class ProjectContainer extends Component {
  render() {
    const {
      TopImage,
      BottomImage,
      ProjectDescription,
      FooterImage,
      isMoreSpaced,
    } = this.props;

    return (
      <ProjectContainerDiv>
        <NavBarContainer>
          <NavBar isProjectPage />
        </NavBarContainer>
        <ScrollAnimation duration={3} animateIn="fadeIn">{TopImage}</ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <StyledProjectDescriptionDiv>
            <StyledPaper isMoreSpaced={isMoreSpaced}>
              {ProjectDescription}
            </StyledPaper>
          </StyledProjectDescriptionDiv>
        </ScrollAnimation>
        {BottomImage}
        <ProjectFooterDiv>{FooterImage}</ProjectFooterDiv>
      </ProjectContainerDiv>
    );
  }
}
