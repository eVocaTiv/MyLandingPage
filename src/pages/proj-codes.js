import React, { Component } from 'react';
import { ProjectContainer } from '@containers';
import JavaCodesImage1 from '@components/Images/ProjectDetailsImages/JavaCodesImage1';
import JavaCodesImage2 from '@components/Images/ProjectDetailsImages/JavaCodesImage2';
import FooterImage from '@components/Images/ProjectDetailsImages/FooterImage';
import { checkForInvalidBrowser } from '@utils/commonUtils';

class Project extends Component {
  componentDidMount = () => {
    checkForInvalidBrowser();
  };
  render() {
    return (
      <ProjectContainer
        TopImage={<JavaCodesImage1 />}
        BottomImage={<JavaCodesImage2 />}
        ProjectDescription="This is the master code repository which contains code snippets from Competitive Programming,
         some tuitions I offered at Chegg Inc. and various subject like Principles of Programming Languages, Socket Programming, Microprocessors, Data Structures and Analysis of Algorithms.   "
        isMoreSpaced={'large'}
        FooterImage={
          <FooterImage githubURL="https://github.com/eVocaTiv/JustDev" />
        }
      />
    );
  }
}

export default Project;
