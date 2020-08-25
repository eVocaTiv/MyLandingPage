import React, { Component } from 'react';
import { ProjectContainer } from '@containers';
import OtherFiddlesImage1 from '@components/Images/ProjectDetailsImages/OtherFiddlesImage1';
import OtherFiddlesImage2 from '@components/Images/ProjectDetailsImages/OtherFiddlesImage2';
import FooterImage from '@components/Images/ProjectDetailsImages/FooterImage';
import { checkForInvalidBrowser } from '@utils/commonUtils';

class Project extends Component {
  componentDidMount = () => {
    checkForInvalidBrowser();
  };
  render() {
    return (
      <ProjectContainer
        TopImage={<OtherFiddlesImage1 />}
        BottomImage={<OtherFiddlesImage2 />}
        ProjectDescription="Fun effects I made while learning new things including HTML, CSS and Logo making!"
        FooterImage={
          <FooterImage
            demoURLs={[
              'https://drive.google.com/open?id=1y16ghuqgk4rw0AcznoBlZE8UnGFsDmlF',
              'https://evocativ.github.io/VentureUI',
              'https://evocativ.github.io/SteeringEffectXclam',
              'https://evocativ.github.io/RockPaperScissorCSS',
              'https://evocativ.github.io/PureCSS_Nav',
            ]}
            toolTips={[
              'A custom made logo video',
              'A split page effect!',
              'A text effect using p5js library!',
              'Rock-Paper-Scissors game!',
              'A simple navbar with drop down using only pure CSS!',
            ]}
            areDesktopOnlyLinks
          />
        }
        isMoreSpaced={'xLarge'}
      />
    );
  }
}

export default Project;
