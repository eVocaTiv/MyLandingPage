import React, { Component } from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AssignmentIcon from '@material-ui/icons/Assignment';
import InstagramIcon from '@material-ui/icons/Instagram';
import AppsIcon from '@material-ui/icons/Apps';
import Tooltip from '@material-ui/core/Tooltip';
import { NavBar } from '@components';
import '@styles/connectStyles.css';
import '@styles/commonStyles.css';
import 'animate.css/animate.min.css';
import ReactGA from 'react-ga';

const NavBarContainer = styled.div`
  width: 100%;
`;

const StyledIconsDiv = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 92.5%;
  z-index: 1000;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
`;
const BlackDiv = styled.div`
  background-color: black;
`;

const StyledFooterDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #4C4659;
  // old design
  // clip-path: polygon(0 0, 100% 0, 0 100%, 75vh 100%);
  clip-path: polygon(0 90%, 100% 90%, 100% 100%, 0% 100%);
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
  left: 37.5%;
  top: 40vh;
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

const StyledChessIcon = styled(AppsIcon)`
  cursor: pointer;
  color: #ffffff;
  transition: all 0.5s ease !important;
  fontSize: 1rem;
  &:hover {
    color: #e6912c;
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

  componentDidMount = () => {
    ReactGA.initialize('UA-162482291-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <BlackDiv>
        <NavBarContainer>
          <NavBar />
        </NavBarContainer>

        <CopyRightDiv className="footer-copyright">© 2020 Kunal Dewan</CopyRightDiv>

        <StyledFooterDiv className="footer-styled-div anim-smooth">
          <StyledIconsDiv className="footer-styled-icons-div anim-smooth">
            <Tooltip title="Resume">
              <a href="https://drive.google.com/file/d/12bCcowEdhg1Exi_Zo_SIOehUpo1BAj9g/view?usp=sharing" target="_blank">
                <StyledResumeIcon />
              </a>
            </Tooltip>
            <Tooltip title="Email: Kunalx011@gmail.com">
              <a href="mailto:kunalx011@gmail.com">
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
            <Tooltip title="Chess.com">
              <a href="https://www.chess.com/member/evocativ" target="_blank">
                <StyledChessIcon />
              </a>
            </Tooltip>
          </StyledIconsDiv>
        </StyledFooterDiv>
      </BlackDiv>
    );
  }
}

export default FooterContainer;
