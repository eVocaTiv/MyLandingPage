import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import { TopLayerContainer } from '@containers';
import App from '@components/3DModel/App.js';
import { NavBar } from '@components';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  width: 100%;
`;

class LandingPage extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <NavBarContainer>
          <NavBar />
        </NavBarContainer>
        <App />
      </ThemeProvider>
    );
  }
}

export default LandingPage;
