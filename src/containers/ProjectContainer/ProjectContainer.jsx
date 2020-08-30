import React, { Component } from 'react';
import styled from 'styled-components';
import { NavBar } from '@components';
import Card from '@material-ui/core/Card';
import ScrollAnimation from 'react-animate-on-scroll';
import '@styles/projectDetailStyles.css';
import '@styles/commonStyles.css';
import 'animate.css/animate.min.css';
import ReactGA from 'react-ga';

const ProjectContainerDiv = styled.div`
  background-color: black;
`;

const NavBarContainer = styled.div`
  width: 100%;
`;

const StyledProjectDescriptionDiv = styled.div`
  height: 100vh;
  position: relative;
  color: white;
`;

const StyledPaper = styled(Card)`
  // override default transition in card's child.
  cursor: pointer;
  min-width: 200px !important;
  width: 80% !important;
  height: 80vh;
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
  font-size: 1.15rem;
  letter-spacing: 0.05rem;
  box-shadow: none !important;
  pointer-events: none;
  font-family: 'Montserrat';
  color: white !important;
  text-align: justify;
`;

const ProjectFooterDiv = styled.div`
  height: 100vh;
`;

export default class ProjectContainer extends Component {
  
  componentDidMount = () => {
    ReactGA.initialize('UA-162482291-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

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
          <ScrollAnimation animateOnce duration={3} animateIn="fadeIn">
            <div
              style={{
                clipPath: 'polygon(0 2.5%, 100% 2.5%, 100% 97.5%, 0% 97.5%)',
              }}
            >
              {TopImage}
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="fadeIn">
            <StyledProjectDescriptionDiv>
              <StyledPaper
                className="project-description anim-smooth"
                isMoreSpaced={isMoreSpaced}
              >
                {ProjectDescription}
              </StyledPaper>
            </StyledProjectDescriptionDiv>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="fadeIn">{BottomImage}</ScrollAnimation>
          <ProjectFooterDiv>{FooterImage}</ProjectFooterDiv>
      </ProjectContainerDiv>
    );
  }
}
