import React from 'react';
import styled from 'styled-components';
import SEO from '@components/seo';
import Button from '@material-ui/core/Button';
import { navigate } from 'gatsby';
import '@styles/navStyles.css';

const NotFoundContainer = styled.div`
  width: 100%;
  height: 90vh !important;
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

const NotFoundPage = () => (
  <NotFoundContainer>
    <SEO title="404: Not found" />
    <h1 style={{ color: '#00C2CB', margin: '10%' }}>
      This page doesn't exist!
    </h1>
    <StyledButton
      onClick={() => navigate('/')}
      color="inherit"
      className="nav-button"
    >
      <h2>Home</h2>
    </StyledButton>
  </NotFoundContainer>
);

export default NotFoundPage;
