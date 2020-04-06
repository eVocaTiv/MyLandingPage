import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import { ProjectContainer } from '@containers';
import ZentorsImage1 from '@components/Images/ProjectDetailsImages/ZentorsImage1';
import ZentorsImage2 from '@components/Images/ProjectDetailsImages/ZentorsImage2';
import FooterImage from '@components/Images/ProjectDetailsImages/FooterImage';

class Project extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ProjectContainer
          TopImage={<ZentorsImage1 />}
          BottomImage={<ZentorsImage2 />}
          isMoreSpaced={'large'}
          ProjectDescription="Zentors is a college student mentoring startup founded by 3 students of Stanford University, California. I worked as a UI Developer &amp; 
          UX Designer to make prototypes for their new application and provide technical guidance on the software architecture to the business leads."
          FooterImage={
            <FooterImage githubURL="https://github.com/eVocaTiv/ZentorsUI" />
          }
        />
      </ThemeProvider>
    );
  }
}

export default Project;
