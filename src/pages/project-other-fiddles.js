import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import { ProjectContainer } from '@containers';
import OtherFiddlesImage1 from '@components/Images/ProjectDetailsImages/OtherFiddlesImage1';
import OtherFiddlesImage2 from '@components/Images/ProjectDetailsImages/OtherFiddlesImage2';
import FooterImage from '@components/Images/ProjectDetailsImages/FooterImage';

class Project extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ProjectContainer
          TopImage={<OtherFiddlesImage1 />}
          BottomImage={<OtherFiddlesImage2 />}
          ProjectDescription="Some mesmerizing effects I made in my personal time!! These are made using CSS, HTML, Javascript and misc. libraries. Feel free to connect to me if you want to work on any idea!"
          FooterImage={
            <FooterImage
              demoURLs={[
                process.env.NODE_ENV === 'development'
                  ? 'http://localhost:8000/model-effect'
                  : 'https://www.kunaldewan.com/model-effect',
                'https://evocativ.github.io/VentureUI',
                'https://evocativ.github.io/SteeringEffectXclam',
                'https://evocativ.github.io/RockPaperScissorCSS',
                'https://evocativ.github.io/PureCSS_Nav',
              ]}
              toolTips={[
                'A 3-D model effect using GLTFJSX! \ [ caution: GPU heavy ]',
                'A split page effect!',
                'A text effect using p5js library!',
                'Rock-Paper-Scissors game!',
                'A simple navbar with drop down using only pure CSS!',
              ]}
            />
          }
          isMoreSpaced={'xLarge'}
        />
      </ThemeProvider>
    );
  }
}

export default Project;
