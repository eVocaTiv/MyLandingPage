import { Component } from 'react';

class AppWrapper extends Component {
  render() {
    const { children } = this.props;
    return children;
  }
}

export default AppWrapper;
