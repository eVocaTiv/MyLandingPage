import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import { ModelContainer } from '@containers';
import '@styles/commonStyles.css';

class ModelEffect extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ModelContainer />
      </ThemeProvider>
    );
  }
}
export default ModelEffect;