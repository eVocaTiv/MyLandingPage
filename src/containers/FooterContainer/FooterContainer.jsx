import React, { Component } from 'react';
import styled from 'styled-components';
import Constants from '@constants';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AssignmentIcon from '@material-ui/icons/Assignment';
import InstagramIcon from '@material-ui/icons/Instagram';
import Tooltip from '@material-ui/core/Tooltip';
import ScrollAnimation from 'react-animate-on-scroll';
import { NavBar } from '@components';

const NavBarContainer = styled.div`
  width: 100%;
`;

const { footer } = Constants.anchorIds;

const StyledFooterText = styled.div`
  position: relative;
  font-family: 'Great Vibes';
  left: 20%;
  top: 35%;
  font-size: 4rem;
  color: #00C2CB;
  width: 40%;
`;

const StyledIconsDiv = styled.div`
  display: flex;
  width: 17.5%;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 90%;
  left: 12.5%;
  z-index: 1000;
`;
const BlackDiv = styled.div`
  background-color: black;
`;

const StyledFooterDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #4c4659;
  clip-path: polygon(0 0, 100% 0, 0 100%, 75vh 100%);
`;

const StyledMailIcon = styled(MailOutlineIcon)`
  color: #ffffff;
  transition: all 0.5s ease !important;
  fontSize: 1rem;
  &:hover {
    color: #dc574c;
    transform: scale(1.5);
  },
`;

const StyledSubText = styled.div`
  position: absolute;
  font-family: 'Julius Sans One';
  left: -5vw;
  top: -29vh;
  font-size: 1rem;
  color: #00c2cb;
  z-index: 1000;
`;

const StyledInstagramIcon = styled(InstagramIcon)`
  cursor: pointer;
  color: #ffffff;
  transition: all 0.5s ease !important;
  fontSize: 1rem;
  &:hover {
    color: #a72b9b;
    transform: scale(1.5);
  },
`;

const StyledResumeIcon = styled(AssignmentIcon)`
  cursor: pointer;
  color: #ffffff;
  transition: all 0.5s ease !important;
  fontSize: 1rem;
  &:hover {
    color: #3cb371;
    transform: scale(1.5);
  },
`;

const StyledLinkedInIcon = styled(LinkedInIcon)`
  color: #ffffff;
  transition: all 0.5s ease !important;
  fontSize: 1rem;
  &:hover {
    color: #0077b5;
    transform: scale(1.5);
  },
`;

const StyledFacebookIcon = styled(FacebookIcon)`
  color: #ffffff;
  transition: all 0.5s ease !important;
  fontSize: 1rem;
  &:hover {
    color: #4267b2;
    transform: scale(1.5);
  },
`;

const StyledGitHubIcon = styled(GitHubIcon)`
  color: #ffffff;
  // overriding default child transition
  transition: all 0.5s ease !important;
  fontSize: 1rem;
  &:hover {
    color: #000000;
    transform: scale(1.5);
  },
`;

class FooterContainer extends Component {

  render() {
    return (
      <BlackDiv>
        <NavBarContainer>
          <NavBar />
        </NavBarContainer>
        <StyledFooterDiv id={footer}>
          <StyledFooterText>
            <ScrollAnimation
              initiallyVisible={true}
              delay={2000}
              animateIn="fadeOut"
              animateOnce
            >
              Get In Touch!
            </ScrollAnimation>
            <ScrollAnimation
              delay={6000}
              animateIn="zoomOut"
              animateOnce
              initiallyVisible={true}
            >
              <ScrollAnimation
                initiallyVisible={false}
                delay={2500}
                animateIn="zoomIn"
                animateOnce
              >
                This way &#x2198;
              </ScrollAnimation>
            </ScrollAnimation>
            <ScrollAnimation
              initiallyVisible={false}
              delay={6000}
              animateIn="zoomIn"
              animateOnce
            >
              Thank you!
            </ScrollAnimation>
            <StyledSubText>
              <ScrollAnimation animateIn="fadeIn">
                © 2020 Kunal Dewan
              </ScrollAnimation>
            </StyledSubText>
          </StyledFooterText>

          <StyledIconsDiv>
            <Tooltip title="Resume">
              <a href="https://tinyurl.com/kunal-dewan-resume" target="_blank">
                <StyledResumeIcon />
              </a>
            </Tooltip>
            <Tooltip title="Email: Kunalx011@gmail.com">
              <a>
                <StyledMailIcon />
              </a>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <a href="https://tinyurl.com/linkedin-kd" target="_blank">
                <StyledLinkedInIcon />
              </a>
            </Tooltip>
            <Tooltip title="GitHub">
              <a href="https://github.com/eVocaTiv" target="_blank">
                <StyledGitHubIcon />
              </a>
            </Tooltip>
            <Tooltip title="Facebook">
              <a href="https://www.facebook.com/NkT.NeveR" target="_blank">
                <StyledFacebookIcon />
              </a>
            </Tooltip>
            <Tooltip title="Instagram">
              <a href="https://www.instagram.com/kunz_dewn" target="_blank">
                <StyledInstagramIcon />
              </a>
            </Tooltip>
          </StyledIconsDiv>
        </StyledFooterDiv>
      </BlackDiv>
    );
  }
}

export default FooterContainer;
