import React from 'react';
import styled from 'styled-components';
import SEO from '@components/seo';
import Button from '@material-ui/core/Button';
import { navigate } from 'gatsby';
import '@styles/navStyles.css';

const NotFoundContainer = styled.div`
  width: 100%;
  height: 70vh !important;
  background-color: black !important;
  text-align: center;
`;

const StyledButton = styled(Button)`
  &:hover {
    transform: scale(1.5);
  }
  color: #803966 !important;
  transition: transform 0.5s ease;
`;

const goingToHome = () => {
  document.getElementById('go-home-button').style.pointerEvents = 'none';
  document.getElementById('go-home-button-text').innerHTML = 'Heading home...';
  setTimeout(() => navigate('/'), 250);
};

const NotFoundPage = () => (
  <NotFoundContainer>
    <SEO title="404: Not found" />
    <h1 style={{ color: '#00C2CB', margin: '5%' }}>Hold onnnnn!</h1>
    <h4 style={{ color: '#00C2CB', margin: '2.5%' }}> Either your URL is incorrect or you are using an unsupported browser ( IE / Edge / Safari ) </h4>
    <StyledButton
      id="go-home-button"
      onClick={goingToHome}
      color="inherit"
      className="go-home-button"
    >
      <h2 id="go-home-button-text"> Home</h2>
    </StyledButton>
  </NotFoundContainer>
);

export default NotFoundPage;
