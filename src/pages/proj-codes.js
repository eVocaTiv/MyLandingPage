import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import { ProjectContainer } from '@containers';
import JavaCodesImage1 from '@components/Images/ProjectDetailsImages/JavaCodesImage1';
import JavaCodesImage2 from '@components/Images/ProjectDetailsImages/JavaCodesImage2';
import FooterImage from '@components/Images/ProjectDetailsImages/FooterImage';

class Project extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <ProjectContainer
          TopImage={<JavaCodesImage1 />}
          BottomImage={<JavaCodesImage2 />}
          ProjectDescription="This is the master code repository which contains code snippets from Competitive Programming, Computer Networks,
         some tuitions I gave at Chegg, Principles of Programming Languages, Socket Programming, Microprocessors, Data Structures, Analysis of Algorithms, etc.   "
          isMoreSpaced={'large'}
          FooterImage={
            <FooterImage githubURL="https://github.com/eVocaTiv/JustDev" />
          }
        />
      </ThemeProvider>
    );
  }
}

export default Project;
