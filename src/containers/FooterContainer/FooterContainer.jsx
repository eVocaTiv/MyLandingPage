import React, { Component } from 'react';
import { Card } from '@components';
import styled from 'styled-components';
import Constants from '@constants';
import AboutMeImage from '@components/Images/AboutMeImage';

const { footer } = Constants.anchorIds;

const StyledAboutMeDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #4C4659;
  clip-path: polygon(0 0, 100% 0, 0 100%, 75vh 100%);
`;

class FooterContainer extends Component {
  render() {
    return (
      <StyledAboutMeDiv id={footer}>
      </StyledAboutMeDiv>
    );
  }
}

export default FooterContainer;
