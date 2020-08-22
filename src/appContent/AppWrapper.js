import { Component } from 'react';
import ReactGA from 'react-ga';

class AppWrapper extends Component {
  componentDidMount = () => {
    ReactGA.initialize('UA-162482291-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  };
  render() {
    const { children } = this.props;
    return children;
  }
}

export default AppWrapper;
