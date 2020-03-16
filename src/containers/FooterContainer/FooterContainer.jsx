import React, { Component } from 'react';
import styled from 'styled-components';
import Constants from '@constants';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Tooltip from '@material-ui/core/Tooltip';

const { footer } = Constants.anchorIds;

const StyledFooterText = styled.div`
  position: absolute;
  font-family: 'Great Vibes';
  left: 20%;
  top: 35%;
  font-size: 4rem;
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

const StyledAboutMeDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #4c4659;
  clip-path: polygon(0 0, 100% 0, 0 100%, 75vh 100%);
`;

const StyledMailIcon = styled(MailOutlineIcon)`
  cursor: pointer;
  color: #ffffff;
  transition: all 0.25s ease !important;
  fontSize: 1rem;
  &:hover {
    color: #dc574c;
    transform: scale(1.5);
  },
`;

const StyledLinkedInIcon = styled(LinkedInIcon)`
  color: #ffffff;
  transition: all 0.25s ease !important;
  fontSize: 1rem;
  &:hover {
    color: #0077b5;
    transform: scale(1.5);
  },
`;

const StyledFacebookIcon = styled(FacebookIcon)`
  color: #ffffff;
  transition: all 0.25s ease !important;
  fontSize: 1rem;
  &:hover {
    color: #4267b2;
    transform: scale(1.5);
  },
`;

const StyledGitHubIcon = styled(GitHubIcon)`
  color: #ffffff;
  // overriding default child transition
  transition: all 0.25s ease !important;
  fontSize: 1rem;
  &:hover {
    color: #000000;
    transform: scale(1.5);
  },
`;

class FooterContainer extends Component {
  sendEmail = () => {
    window.open('mailto:kunalx011@gmail.com');
  };

  render() {
    return (
      <StyledAboutMeDiv id={footer}>
        <StyledFooterText>Get In Touch!</StyledFooterText>
        <StyledIconsDiv>
          <Tooltip title="Email: Kunalx011@gmail.com">
            <StyledMailIcon
              onClick={this.sendEmail}
            />
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
        </StyledIconsDiv>
      </StyledAboutMeDiv>
    );
  }
}

export default FooterContainer;
