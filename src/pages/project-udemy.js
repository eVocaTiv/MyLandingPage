import React, { Component } from 'react';
import { ProjectContainer } from '@containers';
import UdemyImage1 from '@components/Images/ProjectDetailsImages/UdemyImage1';
import UdemyImage2 from '@components/Images/ProjectDetailsImages/UdemyImage2';
import FooterImage from '@components/Images/ProjectDetailsImages/FooterImage';
import { checkForInvalidBrowser } from '@utils/commonUtils';

class Project extends Component {
  componentDidMount = () => {
    checkForInvalidBrowser();
  };
  render() {
    return (
      <ProjectContainer
        TopImage={<UdemyImage1 />}
        BottomImage={<UdemyImage2 />}
        ProjectDescription="A collection of UI mockups coded by me. These were made as a part of completion for Udemy courses by Jonas Schmedtmann on Advanced CSS, JavaScript &amp; Web Design.
           The mockups are coded in vanilla JS, HTML &amp; CSS."
        isMoreSpaced={'xLarge'}
        FooterImage={
          <FooterImage
            demoURLs={[
              'https://evocativ.github.io/Nexter/',
              'https://evocativ.github.io/AdvancedCSS-Sass-Floats/',
              'https://evocativ.github.io/Budgety/',
              'https://evocativ.github.io/Forkify/',
            ]}
            toolTips={[
              'A mockup design for a real estate company.',
              'A mockup design for a tourism company.',
              'A mockup design for a budget maintaining app.',
              'A mockup design for a recipe search engine.',
            ]}
            areDesktopOnlyLinks
          />
        }
      />
    );
  }
}

export default Project;
