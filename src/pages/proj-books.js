import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@colors/theme';
import { ProjectContainer } from '@containers';
import BookImage1 from '@components/Images/ProjectDetailsImages/BookImage1';
import BookImage2 from '@components/Images/ProjectDetailsImages/BookImage2';
import FooterImage from '@components/Images/ProjectDetailsImages/FooterImage';

class Project extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <ProjectContainer
          TopImage={<BookImage1 />}
          BottomImage={<BookImage2 />}
          ProjectDescription="My Book Project... Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum  Lorem Ipsum"
          isMoreSpaced={'xLarge'}
          FooterImage={
            <FooterImage githubURL="https://github.com/eVocaTiv/BookWebsite" />
          }
        />
      </ThemeProvider>
    );
  }
}

export default Project;
