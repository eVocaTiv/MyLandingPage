import React, { Component } from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AssignmentIcon from '@material-ui/icons/Assignment';
import InstagramIcon from '@material-ui/icons/Instagram';
import Tooltip from '@material-ui/core/Tooltip';
import ScrollAnimation from 'react-animate-on-scroll';
import { NavBar } from '@components';
import '@styles/commonStyles.css';
import 'animate.css/animate.min.css';

const NavBarContainer = styled.div`
  width: 100%;
`;

const StyledFooterText = styled.div`
  position: fixed;
  font-family: 'Great Vibes';
  left: 20%;
  top: 20%;
  width: 500px;
  height: 500px;
  font-size: 4rem;
  color: #00c2cb;
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

const CopyRightDiv = styled.div`
  position: fixed;
  font-family: 'Julius Sans One';
  left: 10rem;
  top: 1.75rem;
  font-size: 1.25rem;
  color: #fff;
  z-index: 1000;
  opacity: 0.5;
  margin: '1.5rem 0 1rem 0.25rem',
  padding: '0.5rem 1rem',
  fontSize: '0.75rem',
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

        <CopyRightDiv>© 2020 Kunal Dewan</CopyRightDiv>

        <StyledFooterDiv>
          <StyledFooterText>
            <ScrollAnimation delay={7000} animateIn="fadeIn">
              Thank you!
            </ScrollAnimation>
            <ScrollAnimation delay={2000} animateIn="fadeIn">
              <ScrollAnimation
                delay={5000}
                initiallyVisible={true}
                animateOut="fadeOut"
                animateIn="fadeOut"
              >
                This way &#8600;
              </ScrollAnimation>
            </ScrollAnimation>
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
