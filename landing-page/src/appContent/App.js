import React, { Component } from 'react';
import AppWrapper from '@appContent/AppWrapper';
import Routes from '@routes';

class App extends Component {
  render() {
    return <AppWrapper>{Routes}</AppWrapper>;
  }
}

export default App;
