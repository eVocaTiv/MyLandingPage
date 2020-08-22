import React, { Component } from 'react';
import NewLandingContainerBGImage from '@components/Images/NewLandingContainerBGImage';
import '@styles/commonStyles.css';
import '@styles/newLandingStyles.css';
import 'animate.css/animate.min.css';
import ReactGA from 'react-ga';

class NewLandingContainer extends Component {

  componentDidMount = () => {
    ReactGA.initialize('UA-162482291-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return <NewLandingContainerBGImage />;
  }
}

export default NewLandingContainer;
