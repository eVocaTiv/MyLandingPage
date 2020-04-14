import React, { Component } from 'react';
import { ProjectContainer } from '@containers';
import MyWebsiteImage1 from '@components/Images/ProjectDetailsImages/MyWebsiteImage1';
import MyWebsiteImage2 from '@components/Images/ProjectDetailsImages/MyWebsiteImage2';
import FooterImage from '@components/Images/ProjectDetailsImages/FooterImage';
import { checkForInvalidBrowser } from '@utils/commonUtils';

class Project extends Component {
  componentDidMount = () => {
    checkForInvalidBrowser();
  };
  render() {
    return (
      <ProjectContainer
        TopImage={<MyWebsiteImage1 />}
        BottomImage={<MyWebsiteImage2 />}
        ProjectDescription="Made from scratch in a desktop-first fashion using Vanilla JS, Gatsby (based on React v16), CSS styled-components, HTML &amp; Material-UI. Other things include a custom designed
          logo on Canva and web design with mock-ups via hand sketches &amp; Adobe XD. Optimized for slow networks using lazy-loading, pre-loading, pre-fetching, image-thumbnailing and usage of gatsby's code-splitting &amp; static rendering."
        FooterImage={
          <FooterImage githubURL="https://github.com/eVocaTiv/MyLandingPage" />
        }
        isMoreSpaced={'medium'}
      />
    );
  }
}

export default Project;
