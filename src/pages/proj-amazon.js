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
          ProjectDescription="I was a Software Development Intern in Amazon in the early winter &amp; spring of 2019
           where I worked in the India Advertisements Tech. team. Due to my exceptional work in front-end technologies I was given
           the opportunity to work full time as a Front-End Engineer. "
          isMoreSpaced={'large'}
          FooterImage={<FooterImage />}
        />
      </ThemeProvider>
    );
  }
}

export default Project;
