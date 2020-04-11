import React, { Component } from 'react';
import styled from 'styled-components';
import { NavBar } from '@components';
import Card from '@material-ui/core/Card';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import '@styles/commonStyles.css';

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
  width: 80% !important;
  height: 80%;
  padding: 0.5rem;
  background-color: transparent !important;
  position: absolute;
  left: 9%;
  top: ${(props) =>
    props.isMoreSpaced === 'xLarge'
      ? '35%'
      : props.isMoreSpaced === 'large'
      ? '25%'
      : props.isMoreSpaced === 'medium'
      ? '15%'
      : props.isMoreSpaced === 'small'
      ? '10%'
      : '5%'};
  line-height: 3rem;
  font-size: 1.5rem;
  letter-spacing: 0.05rem;
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
        <ScrollAnimation duration={3} animateIn="fadeIn">
          <div style={{
            clipPath: 'polygon(0 2.5%, 100% 2.5%, 100% 97.5%, 0% 97.5%)',
          }}>{TopImage}</div>
        </ScrollAnimation>
        <ScrollAnimation delay={250} animateIn="zoomIn">
          <StyledProjectDescriptionDiv>
            <StyledPaper  className="project-description anim-smooth" isMoreSpaced={isMoreSpaced}>
              {ProjectDescription}
            </StyledPaper>
          </StyledProjectDescriptionDiv>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
        {BottomImage}
        </ScrollAnimation>
        <ProjectFooterDiv>{FooterImage}</ProjectFooterDiv>
      </ProjectContainerDiv>
    );
  }
}
