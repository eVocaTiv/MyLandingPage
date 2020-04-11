import React, { Component } from 'react';
import { ProjectContainer } from '@containers';
import OtherFiddlesImage1 from '@components/Images/ProjectDetailsImages/OtherFiddlesImage1';
import OtherFiddlesImage2 from '@components/Images/ProjectDetailsImages/OtherFiddlesImage2';
import FooterImage from '@components/Images/ProjectDetailsImages/FooterImage';

class Project extends Component {
  render() {
    return (
        <ProjectContainer
          TopImage={<OtherFiddlesImage1 />}
          BottomImage={<OtherFiddlesImage2 />}
          ProjectDescription="Some mesmerizing effects I made in my personal time!! These are made using CSS, HTML, Javascript and misc. libraries. Feel free to connect to me if you want to work on any idea!"
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
