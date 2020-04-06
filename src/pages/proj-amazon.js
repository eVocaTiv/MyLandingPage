import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import { ProjectContainer } from '@containers';
import AmazonImage1 from '@components/Images/ProjectDetailsImages/AmazonImage1';
import AmazonImage2 from '@components/Images/ProjectDetailsImages/AmazonImage2';
import FooterImage from '@components/Images/ProjectDetailsImages/FooterImage';

class Project extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <ProjectContainer
          TopImage={<AmazonImage1 />}
          BottomImage={<AmazonImage2 />}
          ProjectDescription="My Work Experience at Amazon as a Front-End Engineer... Lorem Ipsum Lorem Ipsum"
          isMoreSpaced={'xLarge'}
          FooterImage={<FooterImage />}
        />
      </ThemeProvider>
    );
  }
}

export default Project;
